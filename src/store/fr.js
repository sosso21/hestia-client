import {
  type,
  category,
  localisation,
  capitalType,
} from "./store";

const fr = {
    header: [{
        title: "Agence",
        href: "/agency",
        icon: "bi bi-bank",
      },
      {
        title: "SCPI",
        href: "/scpi",
        icon: "bi bi-piggy-bank",
      },
      {
        title: "Espace Admin",
        href: "/admin",
        icon: "bi bi-person-video3",
      },
    ],
    home: {
      first: {
        title: "INVESTIR EN SCPI",
        description: "L’épargne immobilière sans contraintes",
      },
      second: {
        OurAgency: "nNos Agence",
        title: "Pourquoi choisir Portail-SCPI ?",
        items: [{
            title: "Expertises",
            text: "Avec plus de 10 ans d’expérience, notre équipe est vouée à trouver et sélectionner les meilleures SCPI parmi les plus performantes du marché.",
          },
          {
            title: "Souscription digitalisée",
            text: "Un conseiller dédié vous accompagne lors de votre investissement avec possibilité d’une souscription 100% en ligne via notre outil de signature électronique",
          },
          {
            title: "Disponibilité",
            text: "Notre équipe est à votre écoute via plusieurs canaux : téléphone, emails, skype, zoom … et reste disponible pour vous rencontrer dans nos locaux.",
          },
          {
            title: "Indépendance",
            text: "Notre conseil est réalisé en toute indépendance sans lien capitalistique avec les SCPI. Vous réalisez un investissement adapté à votre situation et à vos objectifs.",
          },
        ],
        scpiResumeTitle: "La SCPI en bref",
        scpiResumeSemiTitle: "Sociétés Civiles de Placement Immobilier",
        scpiResumeSemiDescription: "Une SCPI est un véhicule d’investissement composé exclusivement d’actifs immobiliers professionnels ou d’habitations. La gestion locative, administrative et fiscale est intégralement prise en charge par une société de gestion qui s’occupe de tout (achat des biens, gestion des locataires, entretien du parc immobilier, travaux, paiement des taxes…).",
        scpiResumeSemiLink: "Voir Les SCCPI",

        adventage: {
          title: "Avantages de l’investissement en SCPI",
          description: "Présentation succincte et concise de quelques avantages indéniables !",
          item: [{
              title: "Gestion professionnelle",
              svg: "bi bi-diagram-3",
              description: "Les gérants des SCPI sont des experts qualifiés qui ont l’expérience et une connaissance pointue du marché de l’immobilier. Ils gèrent le processus d’investissement en intégralité (recherche et achat des biens, gestion des locataires et des travaux…).",
            },
            {
              title: "Mutualisation du risque locatif",
              svg: "bi bi-layers",
              description: "La SCPI permet de mutualiser le risque locatif sur de nombreux biens immobiliers de différentes natures (professionnels ou habitations) et de nombreux locataires répartis dans toute la France et en Europe.",
            },
            {
              title: "Revente facile",
              svg: "bi bi-bag-check",
              description: "La liquidité d’un investissement immobilier peut être un critère important, voire essentiel. La SCPI est un produit d’investissement immobilier qui reste relativement liquide par rapport au marché immobilier classique.",
            },
            {
              title: "Revenus réguliers et stables",
              svg: "bi bi-currency-exchange",
              description: "Les SCPI fournissent un taux de rendement compétitif sur le long terme par rapport à d’autres investissements bancaires et financiers. Historiquement les dividendes versés par les SCPI sont stables dans le temps quelles que soient les conditions de marché.",
            },
            {
              title: "Contrôle, régulation et transparence",
              svg: "bi bi-building",
              description: "Les SCPI sont contrôlées et régulées par L’AMF qui délivre un agrément aux sociétés de gestion. Ces dernières doivent publier des bulletins trimestriels, rapports annuels aux porteurs de parts et les investisseurs sont conviés aux assemblées générales chaque année.",
            },
            {
              title: "Flexibilité et zéro charge",
              svg: "bi bi-magic",
              description: "Les investisseurs peuvent choisir le montant de l’investissement à l’achat comme à la revente contrairement à un investissement immobilier traditionnel. Aussi, les loyers sont distribués nets de charges durant toute la durée de l’investissement en SCPI.",
            },
          ],
        },
      },
    },
    itemBox: {
      creation: "Création:",
      scpiLength: "Nombre de SCPI",
      encours: "encours Global Scpi",
      effective: "Effectif",
      MajorityShareholder: "Actionaire majoritaire",
      setBy: "Gérer Par",
      TDM: "TdM",
      partPrice: "Prix de La Part",
    },
    SCPI: {
      title: "ESPACE SCPI",
      AgencyName: "Société de gestion",
      search: "Rechercher",
      filterTitle: "Filtrer les SCPI",
      allScpi: "Tout",
      ourSelection: "Notre Sélection",
      FilterType: "Type de SCPI",
      inputPlaceOlder: "sSélectionnez une option",
      category: "Catégorie de la SCPI",
      location: "Localisation de la SCPI",
      lifeAssurance: "Assurance vie",
      includeLifeAssurance: "Disponible en Assurance vie",
      qPlaceOlder: "Mots Clées",
    },
    AgencysPage: {
      title: "Nos Agences",
    },
    agencySheet: {
      theSCPI: "Les SCPI de l'agence",
      table: {
        address: "Adresse",
        agencyCreation: "Créatuon",
        encours: "Encours Global Scpi",
        fund: "Nombre de Fonds	",
        effective: "Effectif",
        MajorityShareholder: "Actionnaire majoritaire",
      },
    },
    scpiSheet: {
      profil: "Profil ",
      history: "Historique",
      description: "Description",
      scpiSheet: {
        lifeInsurance: "Assurance Vie", // parse
        type: "Type de SCPI",
        distributionRate: "Taux de Distribution " + (new Date().getFullYear() - 1),
        partPrice: "Prix de la part",
        capitalisation: "Localisation",
        parentAgencyName: "Société de Gestion",
        scpiCreation: "Création de la SCPI", // parse
        capitalType: "Capital",
        minSub: "Minimum Souscription",
        periodOfEnjoyment: "Délai de Jouissance",
        subscriptionFee: "Frais de Souscription",
        gestionFee: "Frais de Gestion",
        visaAMF: "Visa AMF",
      },
    },
    login: {
      title: "Connectez Vous",
      email: "saisissez votre e-mail",
      password: "saisissez votre mot de passe",
      connect: "Connexion",
      missedPassword: "Mot de passe oublier ?",
      resetYourPassword: "Réinitialisez votre mot de passe",
      reset: "Réinitialiser",
      msgEmailSended: "Aucun e-mail ne seras envoyer xD ",
    },
    adminHome: {
      title: "Administration",
      q: "Saisissez des mots clés",
      nav: [{
          add: "Ajouter une SCPI",
          section: "scpi",
          text: "SCPI",
        },
        {
          add: "Ajouter une Agence",
          section: "agency",
          text: "Agence",
        },
      ],
    },
    tableAdmin: {
      id: "#~",
      title: "titre",
      CreatedAT: "Date de Création",
    },
    actionSCPI: {
      editTitle: "Editez une  SCPI ",
      uploadTitle: "Ajoutez une SCPI",
      submit:"Soumettre",
      input: [
        //
        {
          slug: "title",
          type: "text",
          text: "Titre",
          placeOlder: "Saisissez le titre",
        },
        {
          slug: "slug",
          type: "text",
          text: "Slug",
          placeOlder: "exemple : exemple-titre",
        },
        {
          slug: "parentAgency",
          type: "select",
          text: "Saisissez une agence"
        },
        {
          slug: "inOurSelection",
          type: "boolean",
          text: "Mettre dans nos sélections",
          option:[{value:1,text:"oui"},{value:0,text:"non"}]
        },
        {
          slug: "lifeInsurance",
          type: "boolean",
          text: "Inclus une assurance vie",
          option:[{value:1,text:"oui"},{value:0,text:"non"}]
        },

        {
          slug: "distributionRate",
          type: "number",
          text: "Taux de Distribution ",
          placeOlder: "Taux en %"
        },
        {
          slug: "scpiCreation",
          type: "date",
          text: "Date  de creéation"
        },
        {
          slug: "minSub",
          type: "number",
          text: "Minimum Souscription",
          placeOlder: "Saisissez une value"
        },
        {
          slug: "periodOfEnjoyment",
          type: "text",
          text: "Délai de Jouissance",
        },
        {
          slug: "visaAMF",
          type: "text",
          text: "Visa AMF",
        },
        {
          slug: "type",
          type: "select",
          text: "Type de SCPI",
          placeOlder: "Choisissez une option",
          option: [...type].map(i=>({value:i ,text:i})),
        },
        {
          slug: "category",
          type: "select",
          text: "Catégorie",
          placeOlder: "Choisissez une option",
          option: [...category].map(i=>({value:i ,text:i})),
        },
        {
          slug: "localisation",
          type: "select",
          text: "Localisation",
          placeOlder: "Choisissez une option",
          option: [...localisation].map(i=>({value:i ,text:i})) ,
        },
        {
          slug: "capitalType",
          type: "select",
          text: "Localisation",
          placeOlder: "Choisissez une option",
          option: [...capitalType].map(i=>({value:i ,text:i})),
        },
        {
          slug: "capitalisation",
          type: "number",
          text: "capitalisation",
          placeOlder: "Saisissez une valeur",
        },
        {
          slug:"partPrice",
          type: "number",
          text: "Prix de la part",
          placeOlder: "Saisissez une valeur en €",
        },
        {
          slug: "profil",
          type: "textarea",
          text: "Profil",
          placeOlder: "Saisissez le champ",
        },
        {
          slug: "history",
          type: "textarea",
          text: "Historique",
          placeOlder: "Saisissez le champ",
        },
        {
          slug: "description",
          type: "textarea",
          text: "Description",
          placeOlder: "Saisissez le champ",
        },
        {
          slug: "periodOfEnjoyment",
          type: "number",
          text: "Prix de la part",
          placeOlder: "Saisissez une valeur en €",
        },
        {
          slug: "subscriptionFee",
          type: "number",
          text: "Frais de souscription",
          placeOlder: "Saisissez une valeur en €",
        },
        {
          slug: "gestionFee",
          type: "number",
          text: "Frais de Gestion",
          placeOlder: "Saisissez une valeur en €",
        },
      ],
    },
    actionAgency: {
      editTitle: "Editez une Agence",
      uploadTitle: "Ajoutez une Agence",
      submit:"Soumettre",
      input: [
        {
          slug: "title",
          type: "text",
          text: "Titre",
          placeOlder: "Saisissez le titre",
        },
        {
          slug: "slug",
          type: "text",
          text: "Slug",
          placeOlder: "exemple : exemple-titre",
        },
        {
          slug: "logo_url",
          type: "image",
        },
        {
          slug: "agencyCreation",
          type: "date",
          text: "Date de création de l'agence"
        },
        {
          slug: "bio",
          type: "textarea",
          text: "bio"
        },
        {
          slug: "address",
          type: "text",
          text: "Adresse de l'agence"
        }, 
        {
          slug: "encours",
          type: "number",
          text: "Encours Global Scpi",
        },
        {
          slug: "fund",
          type: "number",
          text: "number",
          placeOlder:"Saisissez une valeur en €"
        },
        {
          slug: "effective",
          type: "number",
          text: "effectif"
        },
        {
          slug: "MajorityShareholder",
          type: "text",
          text: "Actionnaire majoritaire",
        },
        {
          slug: "phone",
          type: "number",
          text: "Téléphone"
        }, {
          slug: "email",
          type: "email",
          text: "e-mail"
        },
      ]
    }

}
    export default fr