import React from "react";
import sendEmail from "./utils/sendEmail";

export default function Form() {
  return (
    <>
      <div className='form_wrapper'>
        <form onSubmit={sendEmail}>
          <h1>Vidda Laboratório</h1>
          <label for='vet'>Veterinário/Clínica:</label>
          <input type='text' name='vet' placeholder='Digite aqui' />

          <label for='exames'>Tipo de exame:</label>
          <select name='exames'>
            <option selected value='Imagem'>
              Imagem
            </option>
            <option value='Lab'>Laboratório</option>
          </select>

          <label for='pet'>Nome do Animal:</label>
          <input type='text' name='pet' placeholder='Digite aqui' />

          <label for='age'>Idade:</label>
          <input type='text' name='age' placeholder='Digite aqui' />
          <label for='sex'>Sexo:</label>
          <select name='sex'>
            <option value='M'>Macho</option>
            <option value='F'>Fêmea</option>
          </select>
          <button type='submit' value='Submit'>
            Enviar Requisição de Exame
          </button>
        </form>
      </div>
    </>
  );
}
