import React, { useState } from 'react';

const Formulario = () => {
    
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && age && email && selectedOption && termsChecked) {
      alert('Formulário submetido com sucesso.');
    } else {

      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setAge('');
    setEmail('');
    setSelectedOption('');
    setTermsChecked(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Primeiro Nome:</label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="lastName">Último Nome:</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="age">Idade:</label>
        <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Endereço de Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="options">Escolha uma opção:</label>
        <select id="options" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="informação">Informação</option>
          <option value="reclamação">Reclamação</option>
          <option value="recomendação">Recomendação</option>
        </select>
      </div>
      <div>
        <input type="checkbox" id="terms" checked={termsChecked} onChange={(e) => setTermsChecked(e.target.checked)} />
        <label htmlFor="terms">Li e concordo com os termos de uso e política de privacidade.</label>
      </div>
      <button type="submit">Submeter</button>
      <button type="button" onClick={handleClear}>Limpar</button>
    </form>
  );
};

export default Formulario;
