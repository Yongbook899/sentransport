import LigneBus from './LigneBus';
import './ListeLignes.css';

function ListeLignes({ lignes }) {
  return (
    <div className="liste-lignes">
      <div className="liste-header">
        <h2>Lignes Dakar Dem Dikk</h2>
        <span className="badge">
          {lignes.length} lignes disponibles
        </span>
      </div>

      <div className="liste-contenu">
        {lignes.map(ligne => (
          <LigneBus
            key={ligne.id}
            ligne={ligne}
          />
        ))}
      </div>
    </div>
  );
}

export default ListeLignes;