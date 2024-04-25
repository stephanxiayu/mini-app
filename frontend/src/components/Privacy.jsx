import React from "react";
import logo from "../assets/ing3.png";
const Privacy = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 px-5 md:px-10">
        <div className="md:w-1/2 space-y-5">
          <h1 className="adsimple-312768929 text-4xl">Datenschutzerklärung</h1>
          <h2
            id="einleitung-ueberblick"
            className="adsimple-312768929 text-2xl"
          >
            Einleitung und Überblick
          </h2>
          <p>
            Wir haben diese Datenschutzerklärung (Fassung 19.04.2024-312768929)
            verfasst, um Ihnen gemäß der Vorgaben der{" "}
            <a
              className="adsimple-312768929"
              href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=312768929#d1e2269-1-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutz-Grundverordnung (EU) 2016/679
            </a>{" "}
            und anwendbaren nationalen Gesetzen zu erklären, welche
            personenbezogenen Daten (kurz Daten) wir als Verantwortliche &#8211;
            und die von uns beauftragten Auftragsverarbeiter (z. B. Provider)
            &#8211; verarbeiten, zukünftig verarbeiten werden und welche
            rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind
            geschlechtsneutral zu verstehen.
            <br />
            <strong>Kurz gesagt:</strong> Wir informieren Sie umfassend über
            Daten, die wir über Sie verarbeiten.
          </p>
          <p>
            Datenschutzerklärungen klingen für gewöhnlich sehr technisch und
            verwenden juristische Fachbegriffe. Diese Datenschutzerklärung soll
            Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie
            möglich beschreiben. Soweit es der Transparenz förderlich ist,
            werden technische <strong>Begriffe leserfreundlich erklärt</strong>,
            Links zu weiterführenden Informationen geboten und{" "}
            <strong>Grafiken</strong> zum Einsatz gebracht. Wir informieren
            damit in klarer und einfacher Sprache, dass wir im Rahmen unserer
            Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten,
            wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist
            sicher nicht möglich, wenn man möglichst knappe, unklare und
            juristisch-technische Erklärungen abgibt, so wie sie im Internet oft
            Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden
            die folgenden Erläuterungen interessant und informativ und
            vielleicht ist die eine oder andere Information dabei, die Sie noch
            nicht kannten.
            <br />
            Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die
            unten bzw. im Impressum genannte verantwortliche Stelle zu wenden,
            den vorhandenen Links zu folgen und sich weitere Informationen auf
            Drittseiten anzusehen. Unsere Kontaktdaten finden Sie
            selbstverständlich auch im Impressum.
          </p>
          <h2 id="anwendungsbereich" className="adsimple-312768929 text-2xl">
            Anwendungsbereich
          </h2>
          <p>
            Diese Datenschutzerklärung gilt für alle von uns im Unternehmen
            verarbeiteten personenbezogenen Daten und für alle personenbezogenen
            Daten, die von uns beauftragte Firmen (Auftragsverarbeiter)
            verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im
            Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse
            und postalische Anschrift einer Person. Die Verarbeitung
            personenbezogener Daten sorgt dafür, dass wir unsere
            Dienstleistungen und Produkte anbieten und abrechnen können, sei es
            online oder offline. Der Anwendungsbereich dieser
            Datenschutzerklärung umfasst:
          </p>
          <ul>
            <li>
              alle Onlineauftritte (Websites, Onlineshops), die wir betreiben
            </li>
            <li>Social Media Auftritte und E-Mail-Kommunikation</li>
            <li>mobile Apps für Smartphones und andere Geräte</li>
          </ul>
          <p>
            <strong>Kurz gesagt:</strong> Die Datenschutzerklärung gilt für alle
            Bereiche, in denen personenbezogene Daten im Unternehmen über die
            genannten Kanäle strukturiert verarbeitet werden. Sollten wir
            außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten,
            werden wir Sie gegebenenfalls gesondert informieren.
          </p>
          {/* Weitere Inhalte nach Bedarf hier einfügen */}
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img className="object-cover h-96 w-80" src={logo} alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Privacy;
