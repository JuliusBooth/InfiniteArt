from firebase_admin import credentials, storage, initialize_app
import os
import uuid

currentdir = os.path.dirname(os.path.realpath(__file__))
firebase_config_path = os.path.join(currentdir, "infiniteartglitch-firebase-adminsdk-h2y5a-f5e490fda5.json")
cred = credentials.Certificate(firebase_config_path)
initialize_app(cred, {
    'storageBucket': 'infiniteartglitch.appspot.com'
})

def upload_gif_to_firebase(gif_path):
    bucket = storage.bucket()
    storage_filename = str(uuid.uuid4()) + '.gif'
    blob = bucket.blob('gifs/' + storage_filename)
    blob.upload_from_filename(gif_path)
    blob.make_public()
    return blob.public_url

if __name__ == '__main__':
    print(upload_gif_to_firebase('hill.gif'))