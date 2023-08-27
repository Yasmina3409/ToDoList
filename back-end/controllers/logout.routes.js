module.exports.Logout = async (req, res) => {

    req.session.destroy(err => {
        if (err) {
            console.error('Erreur lors de la déconnexion :', err);
            res.status(500).send('Erreur lors de la déconnexion.');
        } else {
            res.status(200).send('Déconnexion réussie.');

        }
    });


}



