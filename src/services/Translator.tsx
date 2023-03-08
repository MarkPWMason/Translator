import IMappings from '../interfaces/IMappings';
import styles from '../components/Body.module.css';

const Translator = (
  input: string,
  mapping: IMappings,
  singleLetter: boolean
) => {
  if (input.length === 0) {
    return [];
  }

  //this is a regex to only allow alpha characters
  input = input.toLowerCase().replace(/[^a-z]/gi, '');

  let alreadyDisplayedKeys: string[] = [];

  let result = [];
  let i = 0;
  /* 
    need while loop that scans every character from i until a space
    and counts then check if thats in it.
  */
  while (i < input.length) {
    let increment = i + 1;
    while (increment <= input.length) {
      if (input.substring(i, increment).split('').includes(' ')) {
        break;
      } else {
        increment++;
      }
    }
    console.log('incremenet ', increment, i);
    if (increment > i + 1) {
      const mappingKeyDynamic = mapping[input.substring(i, increment).trim()];
      if (mappingKeyDynamic) {
        if (
          singleLetter &&
          !alreadyDisplayedKeys.includes(input.substring(i, increment).trim())
        ) {
          alreadyDisplayedKeys.push(input.substring(i, increment).trim());
          result.push(mappingKeyDynamic);
        } else if (!singleLetter) {
          result.push(mappingKeyDynamic);
        }
        i += increment - i;
        continue;
      }
    }

    const mappingKeyLen2 = mapping[input.substring(i, i + 2)];
    if (i < input.length - 1 && mappingKeyLen2) {
      if (
        singleLetter &&
        !alreadyDisplayedKeys.includes(input.substring(i, i + 2))
      ) {
        alreadyDisplayedKeys.push(input.substring(i, i + 2));
        result.push(mappingKeyLen2);
      } else if (!singleLetter) {
        result.push(mappingKeyLen2);
      }
      i += 2;
    } else {
      const mappingKeyLen1 = mapping[input.substring(i, i + 1)];
      if (
        singleLetter &&
        !alreadyDisplayedKeys.includes(input.substring(i, i + 1))
      ) {
        alreadyDisplayedKeys.push(input.substring(i, i + 1));
        result.push(mappingKeyLen1);
      } else {
        if (!singleLetter) {
          result.push(mappingKeyLen1);
        }
      }
      i += 1;
    }
  }
  return result;
};

export const getSoundMappings = (): IMappings => {
  return {
    a: (
      <div>
        <p className={styles.key}>
          &#78143; - use the vulture for short sounds such as 'bat' and 'jack'
        </p>
        <p className={styles.key}>
          &#77981; - use the forearm for longer sounds such as 'make' and 'kate'
        </p>
      </div>
    ),
    c: (
      <div>
        <p className={styles.key}>
          {' '}
          use &#78753; or &#78350; for hard 'c' or 'k' sounds such as cat,
          school, kite or jack
        </p>
        <p className={styles.key}>
          {' '}
          use &#78580; for soft 'c' or 's' sounds such as nice, sorry and cent
        </p>
      </div>
    ),
    ch: (
      <div>
        <p className={styles.key}>
          {' '}
          use &#78719; for 'ch' sounds such as church and choose
        </p>
      </div>
    ),
    e: (
      <div>
        <p className={styles.key}>
          {' '}
          'e' sounds were normally written in Egyptian. Leave this out of your
          name or use the hyroglyph for 'i' sounds as seen below.
        </p>
      </div>
    ),
    f: (
      <div>
        <p className={styles.key}>
          {' '}
          use &#78225; for 'f' sounds as in far, fort, phone, and val. The
          egyptians did not distinguish between 'v' and 'f' sounds so 'v' does
          not have a hieroglyph. For 'v' sounds use the 'f' hieroglyph.
        </p>
      </div>
    ),
    ph: (
      <div>
        <p className={styles.key}>
          {' '}
          use &#78225; for 'ph' sounds as in phone use the 'f' sound.{' '}
        </p>
      </div>
    ),
    v: (
      <div>
        <p className={styles.key}>
          {' '}
          use &#78225; for 'f' sounds as in far, fort, phone, and val. The
          egyptians did not distinguish between 'v' and 'f' sounds so 'v' does
          not have a hieroglyph. For 'v' sounds use the 'f' hieroglyph.
        </p>
      </div>
    ),
    g: (
      <div>
        <p className={styles.key}>
          {' '}
          use &#78780; for hard 'g' sounds such as girl and go &#78227;
        </p>
        <p className={styles.key}>
          {' '}
          use &#78227; for soft 'g' sounds such as in george{' '}
        </p>
      </div>
    ),
    h: (
      <div>
        <p className={styles.key}>
          {' '}
          There are 2 ways of writing 'h' sound. Choose which ever looks best.
        </p>
      </div>
    ),
    i: (
      <div>
        <p className={styles.key}>
          {' '}
          use &#78283; for long and short 'i' sounds as in bit and bite and for
          short 'y' sounds as in you and crayon.
        </p>
      </div>
    ),
    j: (
      <div>
        <p className={styles.key}>
          {' '}
          use &#78227; for 'dj' sounds such as Jeremy or Jenny. This sign is
          also used for soft 'g' sounds like George.
        </p>
      </div>
    ),
    k: (
      <div>
        <p className={styles.key}>use the 'c' hieroglyph for hard k sounds</p>
      </div>
    ),
    l: (
      <div>
        <p className={styles.key}>
          There was no hieroglyph for 'l' sounds in Egyptian, but Egyptian
          scribes often used the &#78061; hieroglyph.
        </p>
      </div>
    ),
    o: (
      <div>
        <p className={styles.key}>
          use &#78193; for long 'o' sounds such as moon and sue.
        </p>
        <p className={styles.key}>
          use &#78703; for shorter 'o' sounds such as bot and cop.
        </p>
      </div>
    ),
    p: (
      <div>
        <p className={styles.key}>
          use &#78008; for hard 'p' sounds as in pet, for ph sounds use &#78225;
        </p>
      </div>
    ),
    q: (
      <div>
        <p className={styles.key}>
          There was no hieroglyph for the 'q' sound. Use both &#78753; and
          &#78193; hieroglyphs to make a 'kw' sound.
        </p>
      </div>
    ),
    r: (
      <div>
        <p className={styles.key}>
          The ancient Egyptians did not distinguish between 'r' and 'i' sounds.
          You can also use &#77963; hieroglyph for 'i' sounds.
        </p>
      </div>
    ),
    t: (
      <div>
        <p className={styles.key}>
          Use the &#78799; hieroglyh for hard 't' sounds as in Tom.
        </p>
      </div>
    ),
    w: (
      <div>
        <p className={styles.key}>
          Use the &#78193; for 'w' sounds as in wind, what and where. This can
          also be used for 'u' as there is no equibalent in ancient Egyptian for
          this.
        </p>
      </div>
    ),
    u: (
      <div>
        <p className={styles.key}>
          Use the &#78193; for 'w' sounds as in wind, what and where. This can
          also be used for 'u' as there is no equibalent in ancient Egyptian for
          this.
        </p>
      </div>
    ),
    x: (
      <div>
        <p className={styles.key}>
          Use the &#78753; and &#78580; hieroglyh for 'x' sounds which are made
          up of 2 sounds - 'k' and 's'. Use it for box, alex and extra.
        </p>
      </div>
    ),
    y: (
      <div>
        <p className={styles.key}>
          use either the &#78284; or &#78829; hieroglyh for long 'y' sounds as
          in Yvonne and Mary.
        </p>
      </div>
    ),
    z: (
      <div>
        <p className={styles.key}>
          use the &#78467; hieroglyh for 'z' sounds as in zebra, Xander, Xerox,
          Suzanne, please and boys
        </p>
      </div>
    ),
  };
};

export const getUnicodeMappings = (): IMappings => {
  //CHANGE TO IMAGE PATHS
  return {
    a: <p className={styles.hieroglyph}>[&#78143; or &#77981;]</p>,
    b: <p className={styles.hieroglyph}>&#78016;</p>,
    c: <p className={styles.hieroglyph}>[&#78753; or &#78350; or &#78580;]</p>,
    d: <p className={styles.hieroglyph}>&#77991;</p>,
    e: <p className={styles.hieroglyph}>&#78284;</p>,
    f: <p className={styles.hieroglyph}>&#78225;</p>,
    g: <p className={styles.hieroglyph}>[&#78780; or &#78227;]</p>,
    h: <p className={styles.hieroglyph}>[&#78420; or &#78747;]</p>,
    i: <p className={styles.hieroglyph}>&#78283;</p>,
    j: <p className={styles.hieroglyph}>&#78227;</p>,
    k: <p className={styles.hieroglyph}>[&#78753; or &#78350;]</p>,
    l: <p className={styles.hieroglyph}>&#78061;</p>,
    m: <p className={styles.hieroglyph}>&#78163;</p>,
    n: <p className={styles.hieroglyph}>&#78358;</p>,
    o: <p className={styles.hieroglyph}>[&#78193; or &#78703;]</p>,
    p: <p className={styles.hieroglyph}>&#78008;</p>,
    q: <p className={styles.hieroglyph}>&#78753; &#78193;</p>,
    r: <p className={styles.hieroglyph}>&#77963;</p>,
    s: <p className={styles.hieroglyph}>&#78580;</p>,
    t: <p className={styles.hieroglyph}>&#78799;</p>,
    u: <p className={styles.hieroglyph}>&#78193; </p>,
    v: <p className={styles.hieroglyph}>&#78225;</p>,
    w: <p className={styles.hieroglyph}>&#78193;</p>,
    x: <p className={styles.hieroglyph}>&#78753; &#78580;</p>,
    y: <p className={styles.hieroglyph}>[&#78284; or &#78829;]</p>,
    z: <p className={styles.hieroglyph}>&#78467;</p>,
    ch: <p className={styles.hieroglyph}>&#78719;</p>,
    ph: <p className={styles.hieroglyph}>&#78225;</p>,
    sh: <p className={styles.hieroglyph}>&#78361;</p>,
    th: <p className={styles.hieroglyph}>&#78799;</p>,
    ck: <p className={styles.hieroglyph}>&#78753;</p>,
    amun: (
      <p className={styles.hieroglyph}>
        (&#78283; &#78816; &#78358; &#77929; or &#77929;)
      </p>
    ),
    amunra: (
      <p className={styles.hieroglyph}>
        (&#78283; &#78816; &#78358; &#78323; &#78820; &#77869; or &#77918;
        &#77929;)
      </p>
    ),
    anubis: (
      <p className={styles.hieroglyph}>
        (&#78283; &#78358; &#78008; &#78193; &#77922; or &#77922; or &#78050;)
      </p>
    ),
    aten: (
      <p className={styles.hieroglyph}>&#78283; &#78799; &#78358; &#77869;</p>
    ),
    bastet: (
      <p className={styles.hieroglyph}>&#78767; &#78799; &#78799; &#77904;</p>
    ),
    geb: <p className={styles.hieroglyph}>&#78189; &#78016; &#77869;</p>,
    hapi: (
      <p className={styles.hieroglyph}>
        &#78747; &#77981; &#78008; &#78829; &#78360; &#78359; &#77869;
      </p>
    ),
    horus: <p className={styles.hieroglyph}>&#78147; or &#78154; &#78339;</p>,
    isis: (
      <p className={styles.hieroglyph}>&#78504; &#78799; &#78215; &#77925; </p>
    ),
    kheperi: (
      <p className={styles.hieroglyph}>&#78243; &#77963; &#78283; &#77869; </p>
    ),
    maat: (
      <p className={styles.hieroglyph}>
        &#78643; &#78873; &#77981; &#78799; &#77926; or &#77926;{' '}
      </p>
    ),
    nut: (
      <p className={styles.hieroglyph}>&#78796; &#78799; &#78319; &#77869; </p>
    ),
    osiris: (
      <p className={styles.hieroglyph}>
        &#77945; &#78504; &#77869; or &#78505; &#77945;
      </p>
    ),
    ptah: (
      <p className={styles.hieroglyph}>
        &#78008; &#78799; &#78747; &#77936; or &#78008; &#78799; &#78747;
      </p>
    ),
    ra: (
      <p className={styles.hieroglyph}>
        &#77963; &#77981; &#78323; &#78820; &#77915; or &#78323; &#78820;
        &#77915; or &#77915;
      </p>
    ),
    set: (
      <p className={styles.hieroglyph}>
        &#78580; &#78799; &#78361; &#77923; or &#77923;
      </p>
    ),
    shu: <p className={styles.hieroglyph}>&#78212; &#78193; &#77869; </p>,
    sobek: (
      <p className={styles.hieroglyph}>
        &#78580; &#78016; &#78753; &#78218; or &#78219;{' '}
      </p>
    ),
    thoth: <p className={styles.hieroglyph}>&#78212; &#78193; &#77869; </p>,
  };
};

export default Translator;
