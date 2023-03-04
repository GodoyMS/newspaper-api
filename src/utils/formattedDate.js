export default function formattedDate(date){
    //GET  DATE IN YYYY-MM-DD FORMAT
    const today = date;
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toLocaleString().padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

