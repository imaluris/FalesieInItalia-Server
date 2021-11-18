/**
 * FalesiaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    _config: {
        actions: true,
        shortcuts: true,
        rest: true
    },

baseEvents: (req, res) => {
    Falesia.find().exec( (err, falesia) => {
        return res.view('pages/listaFalesie',{falesie: falesia});
    });
}
};

