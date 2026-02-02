
export default function convert(name){
    name=name.toLowerCase();
    // console.log(name)
    return ({
        DOCUMENT_NAME:name.charAt(0).toUpperCase() + name.slice(1),
        COLLECTION_NAME:name+'s' });
}
