function Drink({ name }) {

  let partePlanta, contenidoCafeina, antiguedad;

  if (name === 'té') {
    partePlanta = 'hoja';
    contenidoCafeina = '15/70 mg/taza';
    antiguedad = '4,000+ años';
  } else {
    partePlanta = 'grano';
    contenidoCafeina = '80-185 mg/taza';
    antiguedad = '1,000+ años';
  }

    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Parte de la planta</dt>
          <dd>{partePlanta}</dd>
          <dt>Contenido de cafeína</dt>
          <dd>{contenidoCafeina}</dd>
          <dt>Antigüedad</dt>
          <dd>{antiguedad}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="té" />
        <Drink name="café" />
      </div>
    );
  }
  