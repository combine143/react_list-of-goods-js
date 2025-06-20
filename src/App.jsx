import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [activeSort, setActiveSort] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  const applyReverseIfNeeded = arr => (isReversed ? arr.toReversed() : arr);

  const alphabetically = () => {
    let sorted = [...goodsFromServer].sort((a, b) => a.localeCompare(b));

    sorted = applyReverseIfNeeded(sorted);
    setGoods(sorted);
    setActiveSort('ads');
  };

  const length = () => {
    let sorted = [...goodsFromServer].sort((a, b) => a.length - b.length);

    sorted = applyReverseIfNeeded(sorted);
    setGoods(sorted);
    setActiveSort('leng');
  };

  const reverse = () => {
    setGoods(prevGoods => prevGoods.toReversed());
    setIsReversed(prev => !prev);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button ${activeSort === 'ads' ? 'is-info' : 'is-info is-light'}`}
          onClick={alphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button ${activeSort === 'leng' ? 'is-info' : 'is-info is-light'}`}
          onClick={length}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button ${isReversed ? 'is-info' : 'is-info is-light'}`}
          onClick={reverse}
        >
          Reverse
        </button>

        {(activeSort !== '' || isReversed) && (
          <button
            type="button"
            className="button is-info"
            onClick={() => {
              setIsReversed(false);
              setActiveSort('');
              setGoods(goodsFromServer);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
