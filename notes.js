const userNoteArea = document.getElementById("user-note");
const allNotesBlock = document.getElementById("notes");

//define key
const TG_Users_Notes = 'tg_user_notes'

const addNote = () => {
    Telegram.WebApp.CloudStorage.setItem(TG_Users_Notes, userNoteArea.value , onNewNoteCreated);
};

const onNewNoteCreated = (err, success) => {
    if(err){
        alert("Error while creating your note");
    }else if (success){
        alert(" Your Note is created !");
    }
};

const loadNotes = () => {
    Telegram.WebApp.CloudStorage.getItem(TG_Users_Notes, onNewNoteLoaded);
}
const onNewNoteLoaded = (err, data) => {
    if(err){
        alert("Error while loading your note");
    }
       console.log(data);
};