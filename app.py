import argparse
from pytubefix  import YouTube
from pytubefix.exceptions import PytubeFixError

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
        video.register_on_progress_callback(progress_video)
        video_stream = video.streams.filter(res=res).first()
        if video_stream:
            print(f"Starting download at {res} resolution...")
            video_stream.download(location)
            print("Download completed successfully.")
        else:
            print(f"No video stream found for resolution: {res}")
            return False
    except PytubeFixError as e:
        print(f"Error in downloading: {e}")
        return False

# Example usage
URL = input("Enter the URL of the video: ");
RES = "480p"
LOCATION = "D:\\Movies"

# Call the download function
download(URL, RES, LOCATION)