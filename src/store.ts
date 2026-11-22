import { openDB } from 'idb'; import type { StudySet,Settings } from './types';
const dbp=openDB('nheo-vocab',1,{upgrade(db){db.createObjectStore('sets',{keyPath:'id'});db.createObjectStore('meta')}});
export const allSets=async()=>Array.from(await (await dbp).getAll('sets')) as StudySet[];
export const saveSet=async(s:StudySet)=>{await (await dbp).put('sets',s);return s};
export const removeSet=async(id:string)=>{await (await dbp).delete('sets',id)};
export const getSettings=async():Promise<Settings>=>await (await dbp).get('meta','settings')||{theme:'light',speed:1,direction:'word-meaning',autoFlip:false};
export const saveSettings=async(s:Settings)=>{await (await dbp).put('meta',s,'settings')};
export const exportBackup=async()=>JSON.stringify({sets:await allSets(),settings:await getSettings()},null,2);
export const importBackup=async(data:any)=>{if(!Array.isArray(data?.sets))throw Error('Backup must contain a sets array');for(const s of data.sets)await saveSet(s);if(data.settings)await saveSettings(data.settings)};
