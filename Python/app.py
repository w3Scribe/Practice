import argparse
from pytubefix import YouTube
from pytubefix.exceptions import PytubeFixError
import os
from moviepy.editor import VideoFileClip, AudioFileClip

def sizeof_fmt(num, suffix="B"):
    for unit in ["", "K", "M", "G", "T", "P", "E", "Z"]:
        if abs(num) < 1024.0:
            return f"{num:.2f} {unit}{suffix}"
        num /= 1024.0
    return f"{num:.2f} Y{suffix}"

def progress_video(stream, chunk, bytes_remaining):
    total_size = stream.filesize 
    bytes_downloaded = total_size - bytes_remaining
    percentage_of_completion = bytes_downloaded / total_size * 100
    total_size_fmt = sizeof_fmt(total_size)
    bytes_downloaded_fmt = sizeof_fmt(bytes_downloaded)
    print(f"\rDownloading: {percentage_of_completion:.2f}% ({bytes_downloaded_fmt} / {total_size_fmt})", end="", flush=True)

def download(url, res, location):
    try:
        video = YouTube(url)
        video_title = video.title
        print(f"Title of the video: {video_title}")
        video.register_on_progress_callback(progress_video)
        
        # Sanitize the video title to create a valid filename
        sanitized_title = "".join(c if c.isalnum() or c in " ._-()" else "_" for c in video_title)
        
        # Try to get a progressive stream first
        video_stream = video.streams.filter(res=res, progressive=True).first()
        
        if video_stream:
            print(f"Starting download at {res} resolution...")
            video_stream.download(output_path=location, filename=f"{sanitized_title}.mp4")
            print("Download completed successfully.")
        else:
            print(f"No progressive stream found for resolution: {res}. Downloading video and audio separately.")
            
            # Download video and audio separately
            video_stream = video.streams.filter(res=res, mime_type="video/mp4").first()
            audio_stream = video.streams.filter(only_audio=True, mime_type="audio/mp4").first()
            
            if video_stream and audio_stream:
                video_path = os.path.join(location, f"{sanitized_title}_video.mp4")
                audio_path = os.path.join(location, f"{sanitized_title}_audio.mp4")
                
                print("Downloading video stream...")   
                video_stream.download(output_path=location, filename=f"{sanitized_title}_video.mp4")
                
                print("\nDownloading audio stream...")
                audio_stream.download(output_path=location, filename=f"{sanitized_title}_audio.mp4")
                
                # Merge video and audio using moviepy
                output_path = os.path.join(location, f"{sanitized_title}.mp4")
                try:
                    video_clip = VideoFileClip(video_path)
                    audio_clip = AudioFileClip(audio_path)
                    final_clip = video_clip.set_audio(audio_clip)
                    final_clip.write_videofile(output_path, codec="libx264")
                    
                    # Clean up temporary files
                    os.remove(video_path)
                    os.remove(audio_path)
                    print("🎉 Download and merge completed successfully.")
                except Exception as e:
                    print(f"❌ Error in merging video and audio: {e}")
                    return False
            else:
                print("Could not find video or audio stream for the given resolution.")
                return False
    except PytubeFixError as e:
        print(f"Error in downloading: {e}")
        return False
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return False

# Example usage
URL = input("Enter the URL of the video: ")
RES = input("Enter the resolution (e.g. 720p, 1080p): ")
LOCATION = "D:\\Movies"

# Call the download function
download(URL, RES, LOCATION)


# https://youtu.be/PaPN51Mm5qQ?si=51nfeWfC8Y3EDdNF