import './LigneBus.css';

function LigneBus({ numero, depart, arrivee, arrets }) {
  return (
    <div className="ligne-bus">
      <span className="numero">{numero}</span>
      <p>
        {depart} → {arrivee}
      </p>
      <p>{arrets} arrets</p>
    </div>
  );
}

export default LigneBus;