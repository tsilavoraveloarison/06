function showPage(pageName) {

    //Enleve la classe active
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    //Ajoute active au lien clique
    document.getElementById(`nav-${pageName}`).classList.add('active');

    let content = ``;

    if(pageName === 'accueil') {
        content = `
            <div class="row mt-5">
                <div class="col-md-7">
                    <div class="content">
                        <h2>Bienvenue sur mon portfolio !</h2>
                        <p>Etudiant en première année d'ingénieur à Polytech Lille, vous trouverer ici des informations sur mon parcours académique, mes compétences et mes projets.</p>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="contacts">
                        <h2>Mes coordonnées</h2>
                        <div class="contact-row">
                            <div class="contact-label">Email :</div>
                            <div class="contact-value"><a href="mailto:tsilavo.raveloarison@gmail.com">tsilavo.raveloarison@gmail.com</a></div>
                        </div>
                        <div class="contact-row">
                            <div class="contact-label">Téléphone :</div>
                            <div class="contact-value"><a href="tel:+33784724266">+33 7 84 72 42 66</a></div>
                        </div>
                        <div class="contact-row">
                            <div class="contact-label">Adresse :</div>
                            <div class="contact-value">Loos, 59120</div>
                        </div>
                        <div class="contact-row">
                            <div class="contact-label">LinkedIn :</div>
                            <div class="contact-value"><a class="contact-link" href="https://www.linkedin.com/in/tsilavo-raveloarison" target="_blank">www.linkedin.com/in/tsilavo-raveloarison</a></div>
                        </div>
                        <div class="contact-row">
                            <div class="contact-label">GitHub :</div>
                            <div class="contact-value"><a href="https://tsilavoraveloarison.github.io/06/" target="_blank">https://tsilavoraveloarison.github.io/06/</a></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    else if(pageName === 'cv') {
        content = `
            <div class="cv-section">
                <div class="cv-download">
                    <a href="CV_RAVELOARISON_Tsilavo_Alternance_Data.pdf" download class="download-btn">Télécharger mon CV</a>
                </div>
                <h2>Formations</h2>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Polytech Lille, Université de Lille, Villeneuve d’Ascq</h4>
                        <h5>Cycle ingénieur en Informatique, Statistiques et Intelligence Artificielle</h5>
                        <ul>
                            <li>Statistiques & probabilités : probabilités, statistique inférentielle, modélisation</li>
                            <li>Bases de données & décisionnel : SQL, modélisation, aide à la décision</li>
                            <li>Informatique & algorithmique : Python, C/C++, algorithmique</li>
                        </ul>
                    </div>
                    <div class="cv-date">2025 - 2028</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Polytech Paris-Saclay, Université de Paris-Saclay, Orsay</h4>
                        <h5>Classe préparatoire intégrée en Informatique, Mathématiques et Physique</h5>
                    </div>
                    <div class="cv-date">2023 - 2025</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Lycée La Clairefontainte, Antananarivo, Madagascar</h4>
                        <h5>Baccalauréat général, spécialité Mathématiques, Physique</h5>
                        <p>Mention : Bien</p>
                    </div>
                    <div class="cv-date">2020 - 2023</div>
                </div>

                <h2>Expériences</h2>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Pulce Conseils & Etudes, Villeneuve d'Ascq, France</h4>
                        <h5>Chargé d'affaires du Junior-Entreprise de Polytech Lille</h5>
                        <p>Prospection téléphonique et par email auprès d'entreprises pour identifier des opportunités de missions, puis suivi des dossiers clients de la prise de contact jusqu'à la livraison des prestations.</p>
                    </div>
                    <div class="cv-date">Fev 2026 - Aujourd'hui</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>STK Lille, Lille </h4>
                        <h5>Trésorier de l'association </h5>
                        <p>STK est une association socioculturelle malgache qui rassemble des étudiants et jeunes actifs autour d'événements culturels, de moments de convivialité et d'entraide au sein de la communauté malgache en France.</p> <br>
                        <p>Gestion budgétaire de l'association, suivi des flux financiers, tenue des comptes et reporting auprès des membres.</p>
                    </div>
                    <div class="cv-date">Fev 2026 - Aujourd'hui</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Linkee, Paris, France</h4>
                        <h5>Bénévole</h5>
                        <p>Préparation et distribution de paniers alimentaires auprès d'étudiants en situation de précarité, en coordination avec une équipe de bénévoles.</p>
                    </div>
                    <div class="cv-date">Jan 2025 - Juin 2025</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Mc'Donald's, Les Ulis, France</h4>
                        <h5>Equipier polyvalent - CDD</h5>
                        <p>Service client, préparation des commandes, entretien du local.</p>
                    </div>
                    <div class="cv-date">Aout 2024 - Juin 2025</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Batisor,  Thorigny-sur-Marne, France</h4>
                        <h5>Assisant conducteur de travaux - Stage</h5>
                        <p>
                            <ul>
                                <li>Suivi de l'avancement du chantier : anticipation des besoins, organisation des équipes et coordination des délais</li>
                                <li>Rédaction des comptes rendus de réunions de chantier et communication avec les différents intervenants</li>
                                <li>Gestion des approvisionnements : suivi des commandes, coordination des livraisons et contrôle des stocks</li>
                            </ul>
                        </p>
                    </div>
                    <div class="cv-date">Juin 2024 - Juillet 2024</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>STK Paris-Fihobiana, Paris </h4>
                        <h5>Secrétaire de l'association </h5>
                        <p>Rédaction des comptes rendus de réunions, organisation et planification des réunions du bureau et des membres.</p>
                    </div>
                    <div class="cv-date">Jan 2024 - Déc 2025</div>
                </div>

                <h2>Projets</h2>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Projet Data – Tableau de bord interactif</h4>
                        <h5>HTML/CSS, JavaScript, Plotly</h5>
                        <p><a href="#" onclick="showPage('projets')" class="voir-plus">Voir plus</a></p>
                    </div>
                    <div class="cv-date">Mars 2026</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Jeu Hasami Shogi</h4>
                        <h5>C</h5>
                        <p><a href="#" onclick="showPage('projets')" class="voir-plus">Voir plus</a></p>
                    </div>
                    <div class="cv-date">Jan 2026</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Projet Billeterie électronique</h4>
                        <h5>PostgreSQL, PHP, HTML/CSS </h5>
                        <p><a href="#" onclick="showPage('projets')" class="voir-plus">Voir plus</a></p>
                    </div>
                    <div class="cv-date">Déc 2025</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Création d’un jeu de type runne</h4>
                        <h5>Javascript</h5>
                        <p><a href="#" onclick="showPage('projets')" class="voir-plus">Voir plus</a></p>
                    </div>
                    <div class="cv-date">Avril 2025</div>
                </div>

                <div class="cv-item">
                    <div class="cv-content">
                        <h4>Jeu 2048</h4>
                        <h5>C++</h5>
                    </div>
                    <div class="cv-date">Dec 2023</div>
                </div>

            </div>
        `;
    }

    else if(pageName === 'projets') {
        content = `
            <div class="projets-section mt-4">
                <h2>Projets</h2>

                <div class="projet-card mb-4 p-4 border rounded shadow-sm">
                    <h3>Tableau de Bord Interactif : Émissions de CO₂ et polluants des véhicules en France (2015)</h3>
                    <p><strong>Contexte :</strong> Projet académique en binôme dans le cadre du cours Data Web à Polytech Lille. Objectif : réaliser un tableau de bord dynamique sur une thématique DDRS avec des données réelles recoltéees sur le site de l'INSEE.</p>

                    <p><strong>Technologies :</strong> HTML5, CSS3, JavaScript, Bootstrap 5, Plotly.js, parsing CSV en JavaScript.</p>

                    <p><strong>Capture du tableau de bord :</strong></p>
                    <div class="dashboard-screenshot mb-3" style="max-width: 100%; border: 1px solid #ddd; padding: 10px; background: #fafafa;">
                        <img src="projet_data.png" alt="Capture du tableau de bord interactif" style="width: 100%; height: auto;" />
                    </div>

                    <p><strong>Compétences :</strong> Manipulation de données CSV, visualisation de données avec Plotly.js, design responsive, architecture modulaire, analyse critique de données environnementales.</p>

                    <p><strong>Réalisations :</strong> Tableau de bord prêt à l'usage pour l'analyse des émissions dans un cadre de responsabilité sociétale et environnementale, avec un support visuel responsive.</p>

                </div>

                <div class="projet-card mb-4 p-4 border rounded shadow-sm">
                    <h3>Hasami Shogi - Jeu de stratégie en C</h3>
                    
                    <p><strong>Contexte :</strong> Projet académique en binôme à Polytech Lille. Implémentation en C d'une version simplifiée du jeu japonais Hasami Shogi.</p>
                    
                    <p><strong>Règles :</strong> Plateau 9x9, 18 pions par joueur, déplacements horizontaux/verticaux, capture par encadrement, victoire si adversaire a moins de 5 pions.</p>
                    
                    <p><strong>Compétences :</strong> Manipulation de matrices en C, algorithmes complexes, gestion des entrées/sorties, débogage.</p>

                    <p><strong>Réalisations :</strong> Structures de données (plateau, déplacement), validation des coups (obstacles, sauts), algorithme de capture 4 directions, affichage clair avec en-têtes.</p>
                    
                </div>

                <div class="projet-card mb-4 p-4 border rounded shadow-sm">
                    <h3>Billetterie électronique - Système de transport Illevia</h3>
    
                    <p><strong>Contexte :</strong> Projet académique en binôme à Polytech Lille. Création d'une application web de gestion de billetterie électronique pour le réseau Illevia.</p>
    
                    <p><strong>Fonctionnalités :</strong> Rechargement de carte (tickets/abonnements), simulation de validation en gare, gestion de compte utilisateur, interface administrateur avec statistiques (stations les plus fréquentées, nombre de validations).</p>
    
                    <p><strong>Technologies :</strong> PHP (backend),  PostgreSQL (base de données), HTML/CSS (frontend), modélisation UML (diagramme de classes).</p>
    
                    <p><strong>Compétences :</strong> Conception de base de données (modèle conceptuel et relationnel), requêtes SQL complexes, interaction PHP/SQL, gestion de sessions utilisateur.</p>
                </div>

                <div class="projet-card mb-4 p-4 border rounded shadow-sm">
                    <h3>Runner Game (jeu du type Chrome Dino)</h3>
    
                    <p><strong>Contexte :</strong> Projet personnel développé avec la bibliothèque p5.js. Jeu d'endless runner où le joueur contrôle un monstre qui doit éviter des obstacles et collecter des pièces.</p>
    
                    <p><strong>Gameplay :</strong> Appuyez sur ESPACE pour sauter, évitez les pics, ramassez les pièces jaunes pour augmenter votre score. La difficulté augmente progressivement avec le score.</p>
    
                    <p><strong>Technologies :</strong> p5.js, JavaScript (POO).</p>
    
                    <p><strong>Compétences :</strong> Programmation orientée objet (classes Monstre, Pic, Piece, Nuage), gestion des collisions, animation en temps réel, génération procédurale d'obstacles.</p>
    
                    <div class="runner-screenshot mb-3" style="max-width: 100%; border: 1px solid #ddd; padding: 10px; background: #fafafa;">
                        <img src="jeu_runner.png" alt="Capture du jeu runner" style="width: 100%; height: auto;" />
                    </div>
                </div>

            </div>
        `;
    }
    document.getElementById('main-content').innerHTML = content;
}
showPage('accueil');