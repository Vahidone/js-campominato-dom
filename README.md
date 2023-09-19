# js-campominato-dom

## Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git). Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba, fare visulaizzare tutte le bombe in gliglia e congelare la griglia.


1
1.Generare 16 numeri casuali che vanno a rappresentare le bombe.
    1.a Controllare che i numeri non vengano ripetuti.
2. Marchiare le celle con uno dei numeri generati come bomba.
3. impostare un diverso colore se una bomba viene cliccata.
4. Mostrare tutte le caselle contententi una bomba quando vengono cliccate.
5. Contare il numero di click corretti prima di cliccare una bomba (punteggio)
    5.a Impedire che continuando a cliccare sulla stessa casella il punteggio si aumenti.
6. Finire il gioco quando viene cliccata una bomba o vengono selezionate tutte le caselle senza mai cliccare una bomba.
