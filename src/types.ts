export type Card = { id:string; word:string; sound:string; ipa:string; meaning:string; example:string; known:boolean; correct:number; incorrect:number; dueAt?:number }
export type StudySet = { id:string; title:string; cards:Card[]; createdAt:number; updatedAt:number }
export type Settings = { theme:'light'|'dark'; speed:number; direction:'word-meaning'|'meaning-word'; autoFlip:boolean }
