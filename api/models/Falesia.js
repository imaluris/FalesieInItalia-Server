/**
 * Falesia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string',
      required: true
    },
    longitudine: {
      type: 'number',
      required: true,
    },
    latitudine: {
      type: 'number',
      required: true,
    },
    regione: {
      type: 'string',
      required: true
    },
    citta: {
      type: 'string'
    },
    tipo: {
      type: 'string'
    },
    descrizione: {
      type: 'string'
    }

  }

};

