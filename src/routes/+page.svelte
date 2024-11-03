<script>
// @ts-nocheck

    import Reception from "$lib/assets/svg/receptionWebDev.svg";
    import WhoAmI from "$lib/assets/svg/whoAmI.svg";
    import Parcours1 from "$lib/assets/svg/Parcours1.svg";
    import Parcours2 from "$lib/assets/svg/Parcours2.svg";
    import Skateboard from "$lib/assets/svg/Skateboard.svg";
    import Music from "$lib/assets/svg/Musique.svg";
    import Twitter from "$lib/assets/projectsScreen/Twitter.png";
    import Puissance4 from "$lib/assets/projectsScreen/Puissance4.png";
    import BSQ from "$lib/assets/projectsScreen/BSQ.png";
    import PetHeaven from "$lib/assets/projectsScreen/PetHeaven.png";
	import CV from "$lib/assets/CVGuillaumeDubois.pdf";

	let isNavOpen = false;
</script>
<header class="fixed z-50 w-full h-20 bg-[#2EB254] flex justify-center items-center">
    <nav class="w-full max-w-screen-lg flex flex-row justify-between items-center text-xl md:text-2xl">
        <a href="#Reception" class="hidden md:block">Bienvenue !</a>
        <div class="flex items-center w-full justify-between md:w-1/3">
            <div class="relative inline-block">
                <button class="inline-flex items-center py-2 px-4 md:ml-[-12px]" on:click={() => {isNavOpen = !isNavOpen}}>
                    <span>Sommaire</span>
                    <svg class="fill-current h-6 w-6 md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </button>
                <ul class={`absolute pt-1 ${isNavOpen ? "" : "hidden"} bg-[#2EB254]`}>
					<li class="">
						<a
							href="#separator1"
							class="rounded-t bg-[#2EB254] hover:bg-[#228a40] py-2 px-4 block whitespace-no-wrap"
							>Qui suis-je ?</a
						>
					</li>
					<li class="">
						<a
							class="bg-[#2EB254] hover:bg-[#228a40] py-2 px-4 block whitespace-no-wrap"
							href="#separator2">Parcours</a
						>
					</li>
					<li class="">
						<a
							class="bg-[#2EB254] hover:bg-[#228a40] py-2 px-4 block whitespace-no-wrap"
							href="#separator3">Projets</a
						>
					</li>
					<li class="">
						<a
							class="bg-[#2EB254] hover:bg-[#228a40] py-2 px-4 block whitespace-no-wrap"
							href="#separator4">Hobbies</a
						>
					</li>
					<li class="">
						<a
							class="rounded-b bg-[#2EB254] hover:bg-[#228a40] py-2 px-4 block whitespace-no-wrap"
							href="#separator5">Contact</a
						>
					</li>
				</ul>
            </div>
            <h2 class="text-lg md:text-xl mr-6 md:mr-4">
                <a href={CV} target="_blank">Mon CV</a>
            </h2>
        </div>
    </nav>
</header>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={() => {isNavOpen = false}}>
<div id="Reception" class="w-full h-screen flex flex-col md:flex-row justify-evenly">
    <!-- Partie gauche avec le nom et le titre -->
    <div id="receptionLeft" class="w-full md:w-1/2 flex text-center items-center">
        <div class="w-full pl-4 md:pl-20">
            <h1 class="text-[#2EB254] text-4xl md:text-6xl">Guillaume Dubois</h1>
            <h2 class="text-white text-2xl md:text-4xl">Développeur web junior</h2>
        </div>
    </div>

    <!-- Partie droite avec l'image, masquée sur les petits écrans -->
    <div id="receptionRight" class="w-full md:w-1/2 flex justify-center items-center pr-4 md:pr-20">
        <img src="{Reception}" alt="Guillaume Dubois" class="hidden md:block max-w-full h-auto" />
    </div>
</div>

<div id="separator1" class="w-full h-8 bg-[#2EB254]"></div>

<div id="whoAmI" class="w-full h-auto text-white py-14 px-4 md:px-14">
    <div id="whoAmITitle" class="flex flex-col md:flex-row mb-16 mt-6">
        <h2 class="text-4xl md:text-5xl">Qui suis-je ?</h2>
        <div class="hidden md:block w-4 h-10 bg-[#2EB254] mt-2 md:mt-0 md:ml-4"></div>
    </div>

    <div id="whoAmIText" class="text-2xl md:text-4xl w-full leading-[40px] md:leading-[60px]">
        <p>
            Je m'appelle Dubois Guillaume, j'ai 24 ans et je suis actuellement en alternance dans
            l'entreprise Decathlon et dans l'école Epitech Lille.
            <br />Je suis la formation WebAcadémie qui dure 2 ans.
        </p>
        <br />
        <p>
            Mon parcours est assez atypique mais je me suis toujours donné à 100% dans les projets que
            j'ai réalisé. J'adore apprendre dans différents domaines.
        </p>
        <br />
        <!-- <p>'Ma détermination me mènera à tous mes buts' - c'est moi.</p> -->
    </div>

    <div id="whoAmISVG" class="mt-10 flex justify-center md:justify-end">
        <img src={WhoAmI} alt="Who am I ?" class="hidden md:block max-w-full h-auto" />
    </div>
</div>

<div id="separator2" class="w-full h-8 bg-[#2EB254]"></div>

<div id="schoolCareer" class="w-full h-auto text-white py-14 px-4 md:px-14">
    <div id="schoolCareerTitle" class="flex flex-col md:flex-row mt-6">
        <h2 class="text-4xl md:text-5xl">Parcours scolaire</h2>
        <div class="hidden md:block w-4 h-10 bg-[#2EB254] mt-2 md:mt-0 md:ml-4"></div>
    </div>

    <div id="schoolCareerContent" class="my-6">
        <div id="schoolTop" class="flex flex-col md:flex-row justify-between items-center h-auto mb-10 md:mb-0">
            <div id="schoolTopText" class="text-xl md:text-2xl w-full md:w-2/3">
                <p>J'ai étudié dans plusieurs domaines sans rapport direct les uns avec les autres :</p>
                <br />
                <ul class="list-disc pl-5">
                    <li>- J’ai étudié 2 ans en Hôtellerie-Restauration à Michel Servet à Lille.</li>
                    <li>- Je me suis ensuite dirigé vers l’informatique en STI2D au Lycée César Baggio à Lille.</li>
                    <li>- J’ai fini mes années de lycée en MEI (Maintenance d’Équipements Industriels) au Lycée Jules Antonini à Ajaccio.</li>
                </ul>
            </div>
            <div id="schoolTopSVG" class="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
                <img src={Parcours1} alt="School career" class="hidden md:block w-4/5 max-w-xs" />
            </div>
        </div>
        
        <div id="schoolBottom" class="flex flex-col md:flex-row justify-between items-center h-auto">
            <div id="schoolBottomSVG" class="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
                <img src={Parcours2} alt="School career" class="hidden md:block w-4/5 max-w-xs" />
            </div>
            <div id="schoolBottomText" class="text-xl md:text-2xl w-full md:w-2/3 mr-2">
                <p>
                    J’ai ensuite voulu comprendre comment fonctionnaient les différents outils et sites que
                    j’utilisais tous les jours, j’ai donc décidé de faire :
                </p>
                <br />
                <ul class="list-disc pl-5">
                    <li>- 6 semaines d’initiation en suivant la formation BTech qui m'a appris à utiliser les langages HTML et CSS.</li>
                    <li>- 3 mois de bootcamp en suivant la formation Programme Z qui m'a appris à utiliser les langages JavaScript et MERN.</li>
                    <li>- 10 mois de formation et 14 mois d’alternance en suivant la formation WebAcadémie d'Epitech qui m'a appris à utiliser différents langages backend.</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div id="separator3" class="w-full h-8 bg-[#2EB254]"></div>

<div id="projects" class="w-full h-auto text-white py-14 px-4 md:px-14">
    <div id="projectsTitle" class="flex flex-col md:flex-row my-8">
        <h2 class="text-4xl md:text-5xl">Mes projets</h2>
        <div class="hidden md:block w-4 h-10 bg-[#2EB254] mt-2"></div>
    </div>

    <div id="projectsContent" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div id="twitter" class="text-center">
            <a href="https://github.com/EpitechWebAcademiePromo2024/W-WEB-090-LIL-1-1-academie-quentin.guidez" target="_blank">
            <div id="twitterScreen" class="shadow-md rounded-lg overflow-hidden">
                <p class="w-full bg-[#2EB254] rounded-t-lg text-center text-2xl">Twitter</p>
                <img src={Twitter} alt="Twitter projects" class="w-full h-96" />
            </div>
        </a>
        </div>

        <div id="puissance4" class="text-center">
            <a href="https://github.com/EpitechWebAcademiePromo2024/W-JSC-501-LIL-1-1-puissance4-guillaume.dubois" target="_blank">
            <div id="puissance4Screen" class="shadow-md rounded-lg overflow-hidden">
                <p class="w-full bg-[#2EB254] rounded-t-lg text-center text-2xl">Puissance4</p>
                <img src={Puissance4} alt="Puissance4 projects" class="w-full h-96" />
            </div>
        </a>
        </div>

        <div id="BSQ" class="text-center">
            <a href="https://github.com/EpitechWebAcademiePromo2024/W-ALG-502-LIL-2-1-bsq-guillaume.dubois" target="_blank">
            <div id="BSQScreen" class="shadow-md rounded-lg overflow-hidden">
                <p class="w-full bg-[#2EB254] rounded-t-lg text-center text-2xl">BSQ</p>
                <img src={BSQ} alt="BSQ projects" class="w-full h-96" />
            </div>
        </a>
        </div>

        <div id="petHeaven" class="text-center">
            <a href="https://github.com/EpitechWebAcademiePromo2024/W-WEB-502-LIL-2-1-ecommerce-adrien.ritter" target="_blank">
            <div id="petHeavenScreen" class="shadow-md rounded-lg overflow-hidden">
                <p class="w-full bg-[#2EB254] rounded-t-lg text-center text-2xl">PetHeaven</p>
                <img src={PetHeaven} alt="PetHeaven projects" class="w-full h-96" />
            </div>
        </a>
        </div>
    </div>
</div>

<div id="separator4" class="w-full h-8 bg-[#2EB254]"></div>

<div id="Hobbies" class="w-full h-auto text-white py-14 px-4 md:px-14">
    <div id="hobbiesTitle" class="flex flex-col md:flex-row my-6">
        <div class="hidden md:block w-4 h-10 bg-[#2EB254]"></div>
        <h2 class="text-4xl md:text-5xl ml-4">Mes hobbies</h2>
    </div>

    <div id="hobbiesContent" class="h-auto">
        <div id="hobbiesTop" class="flex flex-col md:flex-row justify-between items-center mb-8">
            <div id="hobbiesTopSVG" class="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                <img src={Skateboard} alt="Skateboard" class="hidden md:block w-4/5" />
            </div>
            <div id="hobbiesTopText" class="text-4xl w-full md:w-2/3 leading-[50px]">
                <p>
                    Malgré mon niveau douteux, le skateboard est un sport que j'adore pratiquer et regarder.
                    <br /><br />
                    Ce sport me donne envie de me surpasser et cela me sert dans les épreuves que je traverse dans
                    ma vie privée et professionnelle.
                </p>
            </div>
        </div>

        <div id="hobbiesBottom" class="flex flex-col md:flex-row justify-between items-center">
            <div id="hobbiesBottomText" class="text-4xl mr-2 w-full md:w-2/3 leading-[50px]">
                <p>
                    J'écoute beaucoup de styles de musique différents mais mes préférés sont l'électro et la
                    hard music.
                    <br /><br />
                    Selon le type de musique que j'écoute, cela m'aide à me calmer, à me concentrer ou à persévérer.
                </p>
            </div>
            <div id="hobbiesBottomSVG" class="w-full md:w-1/3 flex justify-center items-center">
                <img src={Music} alt="Music" class="hidden md:block w-3/5" />
            </div>
        </div>
    </div>
</div>

<div id="separator5" class="w-full h-8 bg-[#2EB254]"></div>

<div id="contact" class="w-full h-auto text-white py-14 px-4 md:px-14">
    <div id="contactTitle" class="flex flex-col md:flex-row my-6">
        <h2 class="text-4xl md:text-5xl">Contactez-moi</h2>
        <div class="hidden md:block w-4 h-10 bg-[#2EB254] mt-2 ml-2"></div>
    </div>

    <div id="contactFormContainer" class="w-full md:w-2/3 mx-auto">
        <form id="contactForm" action="https://formspree.io/f/xqakpllj" method="POST">
            <div id="formTop" class="flex flex-col md:flex-row mb-14">
                <div id="formEmail" class="w-full md:w-1/2 md:mr-10 mb-6 md:mb-0">
                    <label for="email" class="w-full text-4xl">Email :</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="example@test.com"
                        required
                        autocomplete="off"
                        name="email"
                        class="bg-[#0C0C0C] h-[50px] w-full mt-6 text-3xl border-4 border-[#2EB254] rounded-lg text-[#2EB254] placeholder:text-[#2EB254]"
                    />
                </div>
                <div id="formSubject" class="w-full md:w-1/2 mb-6 md:mb-0">
                    <label for="subject" class="w-full text-4xl">Objet :</label>
                    <input
                        type="text"
                        id="subject"
                        placeholder="Objet"
                        required
                        autocomplete="off"
                        name="object"
                        class="bg-[#0C0C0C] h-[50px] w-full mt-6 text-3xl border-4 border-[#2EB254] rounded-lg text-[#2EB254] placeholder:text-[#2EB254]"
                    />
                </div>
            </div>
            <div id="formBottom">
                <div id="formMessage" class="w-full mb-6">
                    <label for="message" class="w-full text-4xl">Message :</label>
                    <textarea
                        id="message"
                        placeholder="Message"
                        required
                        wrap="hard"
                        name="message"
                        class="bg-[#0C0C0C] mt-6 border-4 w-full text-3xl border-[#2EB254] rounded-lg text-[#2EB254] placeholder:text-[#2EB254]"
                    ></textarea>
                </div>
                <div id="formButton">
                    <button
                        type="submit"
                        id="contactSubmit"
                        class="bg-[#2EB254] rounded-lg w-full text-4xl flex justify-center items-center h-[50px]"
                    >
                        Envoyer
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
</div>

