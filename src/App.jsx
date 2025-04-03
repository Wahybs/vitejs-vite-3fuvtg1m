import './App.css';
import { useState } from 'react';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    setFormSubmitted(true); // affiche la page de remerciement
  };

  // ✅ Si le formulaire a été envoyé, afficher le message de confirmation
  if (formSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center bg-white mt-10 rounded-xl shadow">
        {/* Les deux logos côte à côte */}
        <div className="flex justify-center items-center gap-6 mb-4">
          <img src="/logo.svg" alt="Logo mairie" className="h-10" />
          <img src="/logo_ICU.svg" alt="Logo ICU" className="h-16" />
          <img src="/tsp.svg" alt="Logo ICU" className="h-14" />
        </div>

        <h2 className="text-2xl font-semibold text-[#002855] mb-4">
          Merci pour votre participation !
        </h2>
        <p className="text-gray-700 mb-2">
          Votre formulaire a bien été envoyé et est en cours de traitement.
        </p>
        <p className="text-gray-600">
          Merci d’avoir contribué à repérer une situation préoccupante sur notre
          territoire.
        </p>
      </div>
    );
  }

  // ✅ Sinon, afficher le formulaire
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-center mb-6">
        <img src="/logo.svg" alt="Logo mairie" className="h-16" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="rounded-2xl shadow-md bg-white p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-[#002855]">
            Signaler une situation préoccupante
          </h2>

          {/* Type de signalement */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Type de situation
            </label>
            <select className="w-full border rounded px-3 py-2" required>
              <option value="">Choisissez un type de signalement</option>
              <option value="isolement">Isolement repéré</option>
              <option value="fragilite">
                Fragilité (santé, mobilité, etc.)
              </option>
              <option value="lien_social">Absence de lien social</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Décrivez la situation
            </label>
            <textarea
              className="w-full border rounded px-3 py-2"
              rows="4"
              placeholder="Ex. : Une dame âgée semble très isolée…"
              required
            />
          </div>

          {/* Localisation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Quartier</label>
              <select className="w-full border rounded px-3 py-2" required>
                <option value="">Choisissez un quartier</option>
                <option value="parc_aux_lievres">Parc aux Lièvres</option>
                <option value="bois_sauvage">Bois Sauvage</option>
                <option value="epinettes">Les Épinettes</option>
                <option value="aunettes">Les Aunettes</option>
                <option value="pyramides">Pyramides</option>
                <option value="champtier_du_coq">Champtier du Coq</option>
                <option value="bras_de_fer">Bras de Fer</option>
                <option value="village">Centre-ville / Le Village</option>
                <option value="mousseau">Le Mousseau</option>
                <option value="canal">Le Canal</option>
                <option value="petit_bourg">Le Petit Bourg</option>
                <option value="aguado">Aguado</option>
                <option value="champs_elysees">Champs-Élysées</option>
                <option value="horizons">Les Horizons</option>
                <option value="coquibus">Coquibus</option>
                <option value="loges">Les Loges</option>
                <option value="grand_bourg">Grand-Bourg</option>
                <option value="essonnes_le_guichet">Essonnes-le-Guichet</option>
                <option value="bois_guillaume">Bois Guillaume</option>
                <option value="universite">Bras de Fer / Université</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Rue (facultatif)
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Ex : Rue Jules Vallès"
              />
            </div>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            style={{
              backgroundColor: '#002855',
              color: 'white',
              fontWeight: 600,
              padding: '12px',
              width: '100%',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#001e44')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#002855')}
          >
            Envoyer le signalement
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
