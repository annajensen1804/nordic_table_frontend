import Button from "../../../components/button/Button"

const DishesSection = ({ dishes, onEdit, onDelete, onAdd }) => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
            <th>Beskrivelse</th>
            <th>Type</th>
            <th>Pris</th>
            <th>Billede</th>
            <th>Signaturret</th>
            <th>Handlinger</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
            <tr key={dish._id}>
              <td>{dish.title}</td>
              <td>{dish.description}</td>
              <td>{dish.category}</td>
              <td>{dish.price} DKK</td>
              <td>
                <img src={dish.image} alt={dish.title} />
              </td>
              <td>{dish.isSignature.toString()}</td>
              <td>
                <Button
                    buttonText="Rediger"
                    variant="edit"
                    onClick={() => onEdit(dish)}
                  />
                  <Button
                    buttonText="Slet"
                    variant="delete"
                    onClick={() => onDelete(dish)}
                  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button buttonText="Tilføj ret" variant="add" onClick={onAdd} />
    </section>
  );
};

export default DishesSection;