import React, { useState } from 'react'

function Books() {
    const [books, uuendaBooks] = useState (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Pride and Prejduice", "Harry Potter"]);
 
    const tagasiOriginaali = () => {
    uuendaBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Pride and Prejduice", "Harry Potter"]);
}

const esimeseTaheJärgi = () => {
    books.sort();
    uuendaBooks(books.slice());
}

const vastupidisesJarjekorras = () => {
    books.sort ((a,b) => b.localeCompare(a));
    uuendaBooks (books.slice());
}

const sonadePikkuseJargi = () => {
    books.sort((a,b) =>a.length - b.length);
    uuendaBooks (books.slice());
}
const sonadeArvuJargi = () => {
    

}

const theAlgus = () => {
    const tulem = books.filter(book => book.startsWith ("The"));
    uuendaBooks(tulem);
}
const middleAnd = () => {
    const tulem = books.filter (book => book.includes (" and "));
    uuendaBooks(tulem);
}
const moreThanTenLetters = () =>  {
    const tulem = books.filter (book => book.length > 10);
    uuendaBooks(tulem);
}
const lessThanSevenLetters = () => {
    const tulem = books.filter (book => book.length < 7);
    uuendaBooks(tulem);
}

const lowerCase = () => {
    const tulem = books.map (book => book.toLowerCase());
    uuendaBooks(tulem);
}

const upperCase = () => {
    const tulem = books.map (book => book.toUpperCase());
    uuendaBooks(tulem);

}
const endsWithPunkt = () => {
    const tulem = books.map (book => book + ".");
    uuendaBooks(tulem);

}
const endsWithHyyumark = () => {
    const tulem = books.map (book => book + "!");
    uuendaBooks(tulem);

}
return (
 <div>
     <div>Tooteid kokku: {books.length} tk</div>
    {books.map(element => <div>{element}</div>)}

        <button onClick={tagasiOriginaali}>Tagasi originaali</button>
        <br /><br />
        <button onClick={esimeseTaheJärgi}>Sorteeri esimese tähe järgi</button>
        <button onClick={vastupidisesJarjekorras}>Sorteeri vastupidises järjekorras esimese tähe osas</button><button onClick={sonadePikkuseJargi}>Sorteeri sõnade pikkuse järgi</button>
        <button onClick={sonadeArvuJargi}>Sorteeri sõnade arvu järgi</button>
        <br /><br />
        <button onClick={theAlgus}>"The"'ga algavad sõnad</button>
        <button onClick={middleAnd}>Keskel "and"</button>
        <button onClick={moreThanTenLetters}>Jäta alles rohkemate tähemärkidega sõnad kui 10 </button>
        <button onClick={lessThanSevenLetters}>Jäta alles vähem kui 7 tähega sõnad</button>
        <br /><br />
        <button onClick={lowerCase}>Kõik tähed väikesteks</button>
        <button onClick={upperCase}>Kõik tähed suurteks</button>
        <button onClick={endsWithPunkt}>Kõikidele punkt lõppu</button>
        <button onClick={endsWithHyyumark}>Kõikidele hüüumärk lõppu</button>
  </div>
    
  )

}

export default Books