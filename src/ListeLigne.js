import LigneBus from './LigneBus.js';
import './ListeLignes.css';

function ListeLignes({ lignes }) {
  return (
    <div className="liste-lignes">
      <div className="liste-header">
        <h2>Lignes Dakar Dem Dikk</h2>
        <span>{lignes.length} lignes disponibles</span>
      </div>
      <div className="liste-contenu">
        {lignes.map(ligne => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
          />
        ))}
      </div>
    </div>
  );
}

export default ListeLignes;