
import { useState } from 'react';

/*
Zadání 1: Vytvořte stavy pro login a heslo a propojte je obousměrně s příslušnými inputy
  ve formuláři.
Zadání 2: Na formulář pověstě obsluhu události `onSubmit`. Nezapomeňte na `event.preventDefault()`.
  Při odeslání formuláře vytvořte objekt se dvěma vlastnostmi: `login` a `password`,
  které budou obsahovat aktuální hodnoty z inputů. Tento objekt si vypište do konzole.
Zadání 3: Vytvořte si stav `error`, bude obsahovat zprávu pro uživatele, pokud něco vyplní špatně.
  Na začátku bude mít prázdnou hodnotu prázdný řetězec. Zobrazte obsah tohoto stavu v prvku
  `.error`.
Zadání 4: Pokud uživatel nechal prázdné pole s loginem, nastavte při odeslání formuláře do stavu
  `error` text: "Chybí login."
Zadání 5: Pokud uživatel nechal prázdné pole s heslem, nastavte při odeslání formuláře do stavu
  `error` text: "Chybí heslo."
Zadání 6: Pokud uživatel správně vyplnil obě pole, do stavu `error` nastavte text `Přihlášení
  proběhlo úspěšně`.
*/

export const Ukol4 = () => {
  const [login, setLogin] = useState('');
  const [heslo, setheslo] = useState('');
  const [error, setError] = useState('');


  const onSubmit = (event) => {
    event.preventDefault();
    if (login === '') {
      setError('Chybí login.');
    } else if (heslo === '') {
      setError('Chybí heslo.');
    } else {
      setError('Přihlášení proběhlo úspěšně.');
      console.log({ login, heslo })
    }
  };

  const onSubmitLog = (event) => {
    event.preventDefault();
    setLogin(event.target.value)
    console.log(login)
  };

  const onSubmitHes = (event) => {
    event.preventDefault();
    setheslo(event.target.value)
    console.log(heslo)
  };

  return (
    <>
      <div className="error">{error}</div>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label>
            Login:
            <input 
              value={login} 
              onChange={onSubmitLog} 
              type="text" />
          </label>
        </div>
        <div className="field">
          <label>
            Heslo:
            <input 
              value={heslo} 
              onChange={onSubmitHes} 
              type="password" />
          </label>
        </div>
        <button type="submit">Přihlásit</button>
      </form>
    </>
  );
};

