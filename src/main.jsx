import './main.css';
// React – c'est l'API qui permettra de gérer les composants.
// Cette ligne importe la bibliothèque React, qui est utilisée pour créer et gérer des composants dans une application web construite avec React.
// Inutile depuis la dernière version de React.
import React from 'react';

// React DOM – c’est l'API qui est responsable de générer les composants dans le DOM.
// Cette ligne importe la partie de la bibliothèque React appelée ReactDOM, qui est responsable de la manipulation du DOM (Document Object Model) pour afficher les composants React dans une application web.
import ReactDOM from 'react-dom/client';

// Cette ligne récupère l'élément HTML avec l'ID "root". Cet élément est l'endroit où le composant React sera affiché dans le DOM de la page web. Le contenu du composant sera inséré à l'intérieur de cet élément.
const rootElement = document.getElementById('root');

// Ici, une racine React est créée en utilisant la méthode createRoot. Une racine React est nécessaire pour les nouvelles versions de React (depuis la version 18) et elle remplace l'utilisation précédente de ReactDOM.render.
const root = ReactDOM.createRoot(rootElement);

// Cette ligne effectue le rendu du composant dans la racine React créée précédemment. Le composant est ici défini en utilisant du JSX (JavaScript XML), une extension de syntaxe qui permet d'écrire des éléments React de manière similaire à du HTML. Dans ce cas, le composant est simplement un élément <h1> contenant le texte "C'est du jsx".
function Profil() {
  return (
    <main className="maClass">
      <h1> EXERCICE 1 : AFFICHE LA PAGE SUIVANTE</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="" className="avatar" />
      <ul>
        <li> Invent new traffic lights</li>
        <li> Rehearse a movie scene </li>
        <li> Improve the spectrum technology </li>
      </ul>
      <Button />
    </main>
  );
}

function Button(){
  return (<button> Boutton </button>)
}

function Avatar() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}

function Baanner(){
  const title="Jungle house"
  const carre=(x)=>{return x*x}
  return <h1>{title.toUpperCase()}</h1>
}

function Pannier(){
  const monstera = 8;
  const lierre = 10;
  const fleurs= 15;
  return <>
  <h1>PANNIER</h1>
  <ul>
  <li>Monster: {monstera}euros</li>
  <li>Lierre: {lierre}euros</li>
  <li>Fleurs: {fleurs}euros</li>

    </ul>
    <p> Total ={monstera + lierre + fleurs} </p>
</>    


}

function User(name, avatar, age, favoriteFood){
  return<>
 <p> Hi, my name is {name}! </p>
 <img src={avatar} alt={name} />
 <p>Age: {age}</p>
 <p>Favorite food: {favoriteFood} </p>

   </>
}

function App() {

  return <> <Profil/> </>
}
root.render(
  <>
    <User />
  </>
);
