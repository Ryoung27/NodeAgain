const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0){


        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added."))
    }else{
        console.log(chalk.red.inverse("Note title taken."))
    }
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notesToKeep.length < notes.length){
        notes.pop({
            title: title,
            })
        
            saveNotes(notesToKeep)
            console.log(chalk.bgGreen("Note removed!"))

    }else{
        console.log(chalk.bgRed("Note not removed!"))
    }

}

const listNotes = (title, body) =>{
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note) =>{
        console.log(note.title)
    })
}


const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
    } catch(e){
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes

}