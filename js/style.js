/* EX della settimana:
Milestone di oggi: MILESTONE#1
NOME REPO:  js-html-css-boolzap
DESCRIZIONE:
RI-Creare layout e funzionalità di whatzapp web: https://web.whatsapp.com/
vi metto comunque uno screeshot sotto di quello visto insieme.
Funzionalità, non tutte ma quelle dettate di volta in volta dai milestones.
Il doc di specifiche lo trovate qui: https://docs.google.com/document/d/1dujso_x1_UTTAR-XmwuURIec2CR79Ap8z81flzSYckY/edit#
BONUS:
per ora nessuno, ci sarà tempo dopo.
NOTE:
Giorno per giorno, si lavora sempre sul milestone assegnato;
vedete voi come organizzarvi negli setp del milestone interessato, come detto a lezione;
non correte, ma cercate ad ogni milestone di arrivare ad una situazione che vi permetta almeno di partire in modo pulito e sicuro il giorno dopo, per il milestone successivo;
quindi approccio: tengo il mio codice il più pulito possibile e parto dalla questione macro, e lascio via via la definizione di dettaglio per dopo;
l’ex prenderà come detto vari giorni quindi abbiamo il tempo poi pian piano, di andare ad affinare la dove, per questioni di tempo abbiam dovuto tralasciare i dettagli;
come detto: Prima di iniziare, come Milestone#0, la questione è leggere per bene le specifiche e fare tutte domande del caso, per non fare lavoro inutile.
Buon coding, e ci si vede domattina per fare un pò di codereview sul milestone#1. */
$( document ).ready(function() {

  $(".new-message.input").click(function(){

    var messaggio = $(".message-text").val();

  })
  //Clono div che sta in id template
  var elementmsg = $(".template .message").clone();

  console.log(elementmsg);

  //formatto il messaggio aggiungendo la classe "send";

  elementmsg.addClass("send")

  //aggiungo il testo al messaggio

  var elementmsgtxt = elementmsg.text(messaggio);

  //uso append per mettere copia del testo valorizzato
  $(".container").append(elementmsg);

  //ripuliamo la riga per scrivere

  $(".message-text").val("");

  //Risposta Auto del pc

  var elementmsg = $(".template .message").clone();

  //timeout alla funzione di 1sec per risposta pc

  setTimeout(function (){
    //aggiungo la classe ricevuto per la formattazione del msg
    elementmsg.addClass("received");
    //modifico testo
    elementmsg.find(".msg").text("GG");
    //valoriziamo il messaggio
    $(".container").append(elementmsg);
  }, 1000);

  $(".searchbar-input").keyup(function(event){
    //creo una var per caso insensitive
    var ricercaNome = $(this).val().tolowerCase();

    // each per ciclare e trovare
    $(".contact").each(function(){
      //var per il nome da cercare

      var nomeDaCercare = $(this).find(".contact-name span:first-child").text().tolowerCase();

      //se lo trova lo mostra se non lo trova non lo mostra
      if (nomeDaCercare.includes(ricercaNome)){
        $(this).show();
      } else {
        $(this).hide();
      }
    });
});
