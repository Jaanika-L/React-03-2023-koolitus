import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function FileUpload(props) {
    let fileToUpload;

    const firebaseConfig = {
        apiKey: 'AIzaSyAJGZ8o0i-vw71KV686pwOEJZjLMok-aAo',
        authDomain : 'https://blogi-ef518.web.app/',
        databaseUrl: 'https://blogi-ef518-default-rtdb.europe-west1.firebasedatabase.app/',
        storageBucket:'gs://blogi-ef518.appspot.com'
    }

    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp)
    let metadata = {
        contentType :'image/png'
    };

    function uploadPicture(file) {
        const storageRef=ref(storage, "images/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
                case "paused":
                    console.log("Upload is paused");
                    break;
                case "running":
                    console.log("Upload is runnind");
                    break;
                default:
                    console.log("Default");
                    break;
            }

        },
        (error) => {
            switch (error.code) {
                case "storage/unauthorized":
                    break;
                case "storage/canceled":
                    break;
                case "storage/unknownn":
                    break;
                default:
                    break; 
            }
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
                props.onSendPictureUrl(downloadURL);
            });
        }
        );
    }
    function handleFileInput (event) {
        fileToUpload = event.target.files[0];
    }
    
  return (
    <div>
        <input onChange={(e) => handleFileInput(e)} type="file" />
        <button onClick={() => uploadPicture(fileToUpload)}>Lae üles</button>
    </div>
  )
}

export default FileUpload