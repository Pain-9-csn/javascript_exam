const fullName = document.getElementById("fullName");
const job = document.getElementById("job");
const imgContainer = document.getElementById("img-container");
const mail = document.getElementById("mail");
const tel = document.getElementById("tel");
const loc = document.getElementById("loc");
const linke = document.getElementById("linke");
const site = document.getElementById("site");
const ah3 = document.getElementById("H3A");
const pa = document.getElementById("PA");
const bh3 = document.getElementById("H3B");
const pb = document.getElementById("PB");
const ch3 = document.getElementById("H3C");
const dh3 = document.getElementById("H3D");
const eh3 = document.getElementById("H3E");
const fh3 = document.getElementById("H3F");
const listeExperiences = document.getElementById("liste-experiences");
const listeFormations = document.getElementById("liste-formations");
const listeCompetences = document.getElementById("liste-competences");
const listeLangues = document.getElementById("liste-langues");

let gauche = document.getElementById("gauche");

let divContainer = document.createElement("div");
divContainer.className = "form-container1";

let divFormContainer = document.createElement("div");
divFormContainer.className = "form-container";

let aside = document.createElement("aside");
aside.classList.add("right2");

let formContent = document.createElement("form");
formContent.classList.add("form-content");

let h3a = document.createElement("h3");
h3a.textContent = "INFORMATIONS PERSONNELLES";

let info = document.createElement("div");
info.classList.add("info");

let pres = document.createElement("div");
pres.classList.add("pres");

let champNom = document.createElement("div");
champNom.className = "field nom";

let label1 = document.createElement("label");
label1.textContent = "Nom Complet";

let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "Malamine Sow");
input1.id = "nom";
input1.addEventListener("input", function () {
    if (fullName) fullName.textContent = input1.value;
});

let champPoste = document.createElement("div");
champPoste.className = "field poste";

let label2 = document.createElement("label");
label2.textContent = "Poste";

let input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Développeur WEB");
input2.id = "poste";
input2.addEventListener("input", function () {
    if (job) job.textContent = input2.value;
});

let champImage = document.createElement("div");
champImage.className = "field image";

let label3 = document.createElement("label");
label3.textContent = "Photo";

let photoContainer = document.createElement("div");
photoContainer.classList.add("photo-container");

let img = document.createElement("img");
img.id = "preview-photo";

let input3 = document.createElement("input");
input3.setAttribute("type", "file");
input3.setAttribute("accept", "image/*");
input3.id = "photo";
input3.addEventListener("change", function () {
    const url = URL.createObjectURL(input3.files[0]);
    img.src = url;
    img.style.display = "block";
    document.getElementById("photo-placeholder").style.display = "none";
    if (imgContainer) {
        imgContainer.style.backgroundImage = `url(${url})`;
        imgContainer.style.backgroundSize = "cover";
        imgContainer.style.backgroundPosition = "center";
    }
});

let photoPlaceholder = document.createElement("span");
photoPlaceholder.id = "photo-placeholder";

let icone = document.createElement("i");
icone.className = "fa-solid fa-camera";

let label4 = document.createElement("label");
label4.textContent = "Email";

let input4 = document.createElement("input");
input4.setAttribute("type", "text");
input4.setAttribute("placeholder", "malamine@gmail.com");
input4.id = "email";
input4.addEventListener("input", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let msgEmail = document.getElementById("msg-email");
    if (!msgEmail) {
        msgEmail = document.createElement("span");
        msgEmail.id = "msg-email";
        msgEmail.style.cssText = "font-size:13px; color:#dc2626; display:block; margin-top:4px;";
        input4.parentNode.appendChild(msgEmail);
    }
    if (emailRegex.test(input4.value)) {
        input4.style.borderColor = 'green';
        msgEmail.textContent = '';
        if (mail) mail.innerHTML = '<i class="fa-regular fa-envelope"></i> ' + input4.value;
    } else {
        input4.style.borderColor = '#dc2626';
        msgEmail.textContent = 'Email invalide — ex: nom@domaine.com';
    }
});

let label5 = document.createElement("label");
label5.textContent = "Téléphone";

let input5 = document.createElement("input");
input5.setAttribute("type", "text");
input5.setAttribute("placeholder", "+221 77 858 58 58");
input5.id = "tele";
input5.addEventListener("input", function () {
    const telRegex = /^(\+?\d{1,3}[\s.-]?)?(\d{2,3}[\s.-]?){3,5}\d{2}$/;
    let msgTel = document.getElementById("msg-tel");
    if (!msgTel) {
        msgTel = document.createElement("span");
        msgTel.id = "msg-tel";
        msgTel.style.cssText = "font-size:13px; color:#dc2626; display:block; margin-top:4px;";
        input5.parentNode.appendChild(msgTel);
    }
    if (telRegex.test(input5.value)) {
        input5.style.borderColor = 'green';
        msgTel.textContent = '';
        if (tel) tel.innerHTML = '<i class="fa-solid fa-phone"></i> ' + input5.value;
    } else {
        input5.style.borderColor = '#dc2626';
        msgTel.textContent = 'Numéro invalide — ex: +221 77 858 58 58';
    }
});

let label6 = document.createElement("label");
label6.textContent = "Adresse";

let input6 = document.createElement("input");
input6.setAttribute("type", "text");
input6.setAttribute("placeholder", "Guediawaye, Dakar, Sénégal");
input6.id = "adresse";
input6.addEventListener("input", function () {
    if (loc) loc.innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + input6.value;
});

let label7 = document.createElement("label");
label7.textContent = "Linkedin";

let input7 = document.createElement("input");
input7.setAttribute("type", "text");
input7.setAttribute("placeholder", "linkedin.com/in/malamine");
input7.id = "linkedin";
input7.addEventListener("input", function () {
    if (linke) linke.innerHTML = '<i class="fa-brands fa-linkedin"></i> ' + input7.value;
});

let label8 = document.createElement("label");
label8.textContent = "Portfolio";

let input8 = document.createElement("input");
input8.setAttribute("type", "text");
input8.setAttribute("placeholder", "malamine.com");
input8.id = "portfolio";
input8.addEventListener("input", function () {
    if (site) site.innerHTML = '<i class="fa-solid fa-link"></i> ' + input8.value;
});

const line = document.createElement("hr");

let h3b = document.createElement("h3");
h3b.textContent = "Profil";

let champ6 = document.createElement("div");
champ6.className = "field";

let textarea1 = document.createElement("textarea");
textarea1.setAttribute("rows", "4");
textarea1.setAttribute("placeholder", "Décrivez votre profil...");
textarea1.id = "profil";
textarea1.addEventListener("input", function () {
    if (ah3) ah3.innerHTML = '<i class="fa-regular fa-address-card"></i> Profil';
    if (pa) pa.textContent = textarea1.value;
});

const line2 = document.createElement("hr");

let h3c = document.createElement("h3");
h3c.textContent = "Centres d'intérêts";

let champ7 = document.createElement("div");
champ7.className = "field";

let textarea2 = document.createElement("textarea");
textarea2.setAttribute("rows", "3");
textarea2.setAttribute("placeholder", "Vos centres d'intérêts...");
textarea2.id = "interets";
textarea2.addEventListener("input", function () {
    if (bh3) bh3.innerHTML = '<i class="fa-solid fa-child-reaching"></i> Centres d\'intérêts';
    if (pb) pb.textContent = textarea2.value;
});

const line3 = document.createElement("hr");

let h3d = document.createElement("h3");
h3d.textContent = "Expérience professionnelle";

let expContainer = document.createElement("div");
expContainer.id = "exp-container";

function creerBlocExp() {
    const bloc = document.createElement("div");
    bloc.className = "exp-bloc";

    const champPosteExp = document.createElement("div");
    champPosteExp.className = "field";
    const lp = document.createElement("label");
    lp.textContent = "Poste occupé";
    const ip = document.createElement("input");
    ip.setAttribute("type", "text");
    ip.setAttribute("placeholder", "Développeur Frontend");
    champPosteExp.append(lp, ip);

    const champEntreprise = document.createElement("div");
    champEntreprise.className = "field";
    const le = document.createElement("label");
    le.textContent = "Entreprise";
    const ie = document.createElement("input");
    ie.setAttribute("type", "text");
    ie.setAttribute("placeholder", "Nom de l'entreprise");
    champEntreprise.append(le, ie);

    const row = document.createElement("div");
    row.className = "field-row";

    const champD = document.createElement("div");
    champD.className = "field";
    const ld = document.createElement("label");
    ld.textContent = "Début";
    const iDebut = document.createElement("input");
    iDebut.setAttribute("type", "date");
    champD.append(ld, iDebut);

    const champF = document.createElement("div");
    champF.className = "field";
    const lf = document.createElement("label");
    lf.textContent = "Fin";
    const iFin = document.createElement("input");
    iFin.setAttribute("type", "date");
    champF.append(lf, iFin);

    row.append(champD, champF);

    const champDesc = document.createElement("div");
    champDesc.className = "field";
    const ldesc = document.createElement("label");
    ldesc.textContent = "Description";
    const tdesc = document.createElement("textarea");
    tdesc.setAttribute("rows", "3");
    tdesc.setAttribute("placeholder", "Décrivez vos missions...");
    champDesc.append(ldesc, tdesc);

    const btnSuppr = document.createElement("button");
    btnSuppr.textContent = "Supprimer";
    btnSuppr.className = "btn-suppr";
    btnSuppr.addEventListener("click", function (e) {
        e.preventDefault();
        bloc.remove();
        updateExperiences();
    });

    bloc.append(champPosteExp, champEntreprise, row, champDesc, btnSuppr);

    [ip, ie, iDebut, iFin, tdesc].forEach(champ => {
        champ.addEventListener("input", updateExperiences);
    });

    return bloc;
}

function updateExperiences() {
    if (!listeExperiences) return;
    listeExperiences.innerHTML = '';
    if (dh3) dh3.innerHTML = '<i class="fa-solid fa-briefcase"></i> Expérience professionnelle';
    document.querySelectorAll(".exp-bloc").forEach(bloc => {
        const inputs = bloc.querySelectorAll("input");
        const tdesc = bloc.querySelector("textarea");
        const poste = inputs[0].value;
        const entreprise = inputs[1].value;
        const debut = inputs[2].value;
        const fin = inputs[3].value;
        const desc = tdesc.value;
        if (!poste && !entreprise) return;
        const div = document.createElement("div");
        div.className = "exp-item";
        div.innerHTML = `
            <h4>${poste}</h4>
            <h5>${entreprise}</h5>
            <p class="dates">${debut}${fin ? ' - ' + fin : ''}</p>
            <p>${desc}</p>
        `;
        listeExperiences.appendChild(div);
    });
}

let btn1 = document.createElement("button");
btn1.id = "btn-add-exp";
btn1.textContent = "+ Ajouter une expérience";
btn1.addEventListener("click", function (e) {
    e.preventDefault();
    expContainer.appendChild(creerBlocExp());
});

const line4 = document.createElement("hr");

let h3e = document.createElement("h3");
h3e.textContent = "Parcours Académique";

let eduContainer = document.createElement("div");
eduContainer.id = "edu-container";

function creerBlocEdu() {
    const bloc = document.createElement("div");
    bloc.className = "edu-bloc";

    const champDiplome = document.createElement("div");
    champDiplome.className = "field";
    const ld = document.createElement("label");
    ld.textContent = "Diplôme";
    const iDiplome = document.createElement("input");
    iDiplome.setAttribute("type", "text");
    iDiplome.setAttribute("placeholder", "Bachelor Informatique");
    champDiplome.append(ld, iDiplome);

    const champEcole = document.createElement("div");
    champEcole.className = "field";
    const le = document.createElement("label");
    le.textContent = "École";
    const iEcole = document.createElement("input");
    iEcole.setAttribute("type", "text");
    iEcole.setAttribute("placeholder", "IAM Dakar");
    champEcole.append(le, iEcole);

    const row = document.createElement("div");
    row.className = "field-row";

    const champDates = document.createElement("div");
    champDates.className = "field";
    const ldates = document.createElement("label");
    ldates.textContent = "Dates";
    const iDates = document.createElement("input");
    iDates.setAttribute("type", "text");
    iDates.setAttribute("placeholder", "2024-2026");
    champDates.append(ldates, iDates);

    const champMention = document.createElement("div");
    champMention.className = "field";
    const lmention = document.createElement("label");
    lmention.textContent = "Mention";
    const iMention = document.createElement("input");
    iMention.setAttribute("type", "text");
    iMention.setAttribute("placeholder", "En cours");
    champMention.append(lmention, iMention);

    row.append(champDates, champMention);

    const btnSuppr = document.createElement("button");
    btnSuppr.textContent = "Supprimer";
    btnSuppr.className = "btn-suppr";
    btnSuppr.addEventListener("click", function (e) {
        e.preventDefault();
        bloc.remove();
        updateFormations();
    });

    bloc.append(champDiplome, champEcole, row, btnSuppr);

    [iDiplome, iEcole, iDates, iMention].forEach(champ => {
        champ.addEventListener("input", updateFormations);
    });

    return bloc;
}

function updateFormations() {
    if (!listeFormations) return;
    listeFormations.innerHTML = '';
    if (eh3) eh3.innerHTML = '<i class="fa-solid fa-graduation-cap"></i> Parcours Académique';
    document.querySelectorAll(".edu-bloc").forEach(bloc => {
        const inputs = bloc.querySelectorAll("input");
        const diplome = inputs[0].value;
        const ecole = inputs[1].value;
        const dates = inputs[2].value;
        const mention = inputs[3].value;
        if (!diplome) return;
        const div = document.createElement("div");
        div.className = "edu-item";
        div.innerHTML = `
            <h5>${diplome}</h5>
            <p>${ecole}</p>
            <p>${dates}${mention ? ' | ' + mention : ''}</p>
        `;
        listeFormations.appendChild(div);
    });
}

let btn2 = document.createElement("button");
btn2.id = "btn-add-edu";
btn2.textContent = "+ Ajouter une formation";
btn2.addEventListener("click", function (e) {
    e.preventDefault();
    eduContainer.appendChild(creerBlocEdu());
});

const line5 = document.createElement("hr");

let h3f = document.createElement("h3");
h3f.textContent = "Compétences";

let compContainer = document.createElement("div");
compContainer.id = "comp-container";

function creerBlocComp() {
    const bloc = document.createElement("div");
    bloc.className = "comp-bloc";

    const champComp = document.createElement("div");
    champComp.className = "field";
    const lc = document.createElement("label");
    lc.textContent = "Compétence";
    const ic = document.createElement("input");
    ic.setAttribute("type", "text");
    ic.setAttribute("placeholder", "Ex: JavaScript");
    champComp.append(lc, ic);

    const btnSuppr = document.createElement("button");
    btnSuppr.textContent = "Supprimer";
    btnSuppr.className = "btn-suppr";
    btnSuppr.addEventListener("click", function (e) {
        e.preventDefault();
        bloc.remove();
        updateCompetences();
    });

    bloc.append(champComp, btnSuppr);
    ic.addEventListener("input", updateCompetences);
    return bloc;
}

function updateCompetences() {
    if (!listeCompetences) return;
    listeCompetences.innerHTML = '';
    if (fh3) fh3.innerHTML = '<i class="fa-solid fa-brain"></i> Compétences';
    document.querySelectorAll(".comp-bloc").forEach(bloc => {
        const input = bloc.querySelector("input");
        if (!input.value.trim()) return;
        const li = document.createElement("li");
        li.textContent = input.value.trim();
        listeCompetences.appendChild(li);
    });
}

let btn3 = document.createElement("button");
btn3.id = "btn-add-comp";
btn3.textContent = "+ Ajouter une compétence";
btn3.addEventListener("click", function (e) {
    e.preventDefault();
    compContainer.appendChild(creerBlocComp());
});

const line6 = document.createElement("hr");

let h3g = document.createElement("h3");
h3g.textContent = "Langues";

let langueContainer = document.createElement("div");
langueContainer.id = "langue-container";

function creerBlocLangue() {
    const bloc = document.createElement("div");
    bloc.className = "langue-bloc";

    const champLangue = document.createElement("div");
    champLangue.className = "field";
    const ll = document.createElement("label");
    ll.textContent = "Langue";
    const iLangue = document.createElement("input");
    iLangue.setAttribute("type", "text");
    iLangue.setAttribute("placeholder", "Ex: Français");
    champLangue.append(ll, iLangue);

    const champNiveau = document.createElement("div");
    champNiveau.className = "field";
    const ln = document.createElement("label");
    ln.textContent = "Niveau (1 à 5)";
    const select = document.createElement("select");
    ["--Sélectionner--", "Niveau 1", "Niveau 2", "Niveau 3", "Niveau 4", "Niveau 5"].forEach((txt, i) => {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = txt;
        select.appendChild(opt);
    });
    champNiveau.append(ln, select);

    const btnSuppr = document.createElement("button");
    btnSuppr.textContent = "Supprimer";
    btnSuppr.className = "btn-suppr";
    btnSuppr.addEventListener("click", function (e) {
        e.preventDefault();
        bloc.remove();
        updateLangues();
    });

    bloc.append(champLangue, champNiveau, btnSuppr);

    iLangue.addEventListener("input", updateLangues);
    select.addEventListener("change", updateLangues);

    return bloc;
}

function updateLangues() {
    if (!listeLangues) return;
    listeLangues.innerHTML = '';
    if (ch3) ch3.innerHTML = '<i class="fa-solid fa-language"></i> Langues';
    document.querySelectorAll(".langue-bloc").forEach(bloc => {
        const iLangue = bloc.querySelector("input");
        const select = bloc.querySelector("select");
        const langue = iLangue.value.trim();
        const n = parseInt(select.value);
        if (!langue || n === 0) return;
        let etoiles = '';
        for (let i = 1; i <= 5; i++) {
            etoiles += i <= n
                ? '<i class="fa-solid fa-star"></i>'
                : '<i class="fa-regular fa-star"></i>';
        }
        const span = document.createElement("span");
        span.innerHTML = `${langue} ${etoiles}`;
        listeLangues.appendChild(span);
    });
}

let btn4 = document.createElement("button");
btn4.id = "btn-add-langue";
btn4.textContent = "+ Ajouter une langue";
btn4.addEventListener("click", function (e) {
    e.preventDefault();
    langueContainer.appendChild(creerBlocLangue());
});

let btn5 = document.createElement("button");
btn5.id = "btn-submit";
btn5.textContent = "Générer mon CV";

let champ1 = document.createElement("div");
champ1.className = "field";
let champ2 = document.createElement("div");
champ2.className = "field";
let champ3 = document.createElement("div");
champ3.className = "field";
let champ4 = document.createElement("div");
champ4.className = "field";
let champ5 = document.createElement("div");
champ5.className = "field";

divContainer.appendChild(divFormContainer);
divFormContainer.appendChild(aside);
aside.appendChild(formContent);

formContent.append(
    h3a, info,
    champ1, champ2, champ3, champ4, champ5,
    line,
    h3b, champ6,
    line2,
    h3c, champ7,
    line3,
    h3d, expContainer, btn1,
    line4,
    h3e, eduContainer, btn2,
    line5,
    h3f, compContainer, btn3,
    line6,
    h3g, langueContainer, btn4,
    btn5
);

info.append(pres, champImage);
pres.append(champNom, champPoste);
champNom.append(label1, input1);
champPoste.append(label2, input2);
photoPlaceholder.appendChild(icone);
photoContainer.append(input3, img, photoPlaceholder);
champImage.append(label3, photoContainer);
champ1.append(label4, input4);
champ2.append(label5, input5);
champ3.append(label6, input6);
champ4.append(label7, input7);
champ5.append(label8, input8);
champ6.append(textarea1);
champ7.append(textarea2);

gauche.appendChild(divContainer);

expContainer.appendChild(creerBlocExp());
eduContainer.appendChild(creerBlocEdu());
compContainer.appendChild(creerBlocComp());
langueContainer.appendChild(creerBlocLangue());
btn5.addEventListener("click", function(e) {
    e.preventDefault();
    window.print();
});