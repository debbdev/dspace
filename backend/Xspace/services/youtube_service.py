import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Access the API key from environment variables
YOUTUBE_API_KEY = os.getenv('YOUTUBE_API_KEY')

def get_youtube_videos(channel_id):
    url = f"https://www.googleapis.com/youtube/v3/search"
    params = {
        'part': 'snippet',
        'channelId': channel_id,
        'order': 'date',
        'maxResults': 50,
        'key': YOUTUBE_API_KEY
    }
    response = requests.get(url, params=params)
    response.raise_for_status()
    return response.json()
