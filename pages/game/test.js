import Frame from '../../components/frame';
import ObjectDisplay from '../../components/game/object_display'
import EvalInput from '../../components/game/eval_input'
import { connect, useSelector } from 'react-redux'

const TestPage = () => {
  const settings = useSelector(state => state.settings ? state.settings : EASY_LEVEL.settings)
  const jsons = settings.objects.map(obj => require(`../../data/${obj}`).data)
  const data = jsons.length > 0 ? jsons[0] : {}
  for (var i = 1; i < jsons.length; i++) {
    jsons[i].forEach(elem => data.push(elem))
  }
  return (
    <Frame>
      { false && <ObjectDisplay
        level={1}
        roundNumber={1}
        item={{element: "Modschekiebchen", description: "Nicht nur im Rheinland kann man im Alltag seiner Überraschung durch einige seltsame Wendungen Ausdruck geben.In Ach du lieber mein Vater schwingt dabei wie in Ach du grüne Neune eher die Ahnung eines kommenden Unheils mit; wenn man dagegen einen ganzen Verein mit Mein lieber Herr Gesangsverein anruft, ist durchaus eine unterschwellige Bewunderung zu hören.Genau so ist es mit der Anrede Mein lieber Scholli.Mein lieber Scholli, dat hasse aber gut hingekricht oder wat fürn toller Schlitten, mein lieber Scholli sind durchaus als Ausdruck von Anerkennung und sogar leichten Neides zu verstehen.Auch Erleichterung kann im Spiel sein: Mein lieber Scholli, dat war aber knapp!Wenn dagegen die Mutter früher ausrief: Mein lieber Scholli, wat hasse dir da wieder geleistet.Waat ma, Männeken!, da wusste man, dass Mathäus am letzten war und zog besser schon mal den Kopf ein.Ob sich der kleine Unglücksrabe in dieser brenzligen Situation Gedanken über diesen ominösen Herrn Scholli gemacht hat, ist eher unwahrscheinlich.Dabei neigen ja gerade Kinder zu Personalisierungen, man denke nur an die kindliche Vorstellung von Schreckgestalten, die Eltern zur Disziplinierung ihrer Sprösslinge weidlich ausnutzen.Wer aber ist nun Herr Scholli ? In Süddeutschland und im angrenzenden Österreich weiß man das ganz genau.Es ist der 1765 geborene Ferdinand Joly, den man zu seinen Zeiten den ' ausgejagten Studenten von Salzburg ' nannte, da er auf Grund seiner Verwicklung in ein mysteriöses Vorkommnis 1783 der Salzburger Universität verwiesen worden war.Er führte nach seiner Relegation bis zu seinem Tod im Jahr 1823 das Leben eines Wanderpoeten und Vaganten, der sich in Dörfern einquartierte und die Landbevölkerung mit Sakral - und Hirtenspielen unterhielt.Von seinen Dichtungen ist zwar wenig erhalten geblieben, sein Andenken wird aber in Bayern durch Straßennahmen und auf Volksbühnen bewahrt.Eines dieser Theaterstücke(von Martin Winkelbauer aus Altötting), das seinem Leben und Wirken gewidmet ist, trägt den bezeichnenden Titel ' Mei liaba Schole ', also die bairische Variante unserer umgangssprachlichen Redewendung mein lieber Scholli. In Süddeutschland benennt man heute so jemanden, den man eigentlich mag, der aber gleichzeitig etwas weltfremd und introvertiert erscheint. Natürlich haben die Menschen in Norddeutschland diese Abstammungslegende nicht auf sich sitzen lassen. Sie führen dagegen den Hamburger Buchhalter David Konrad Scholl ins Feld, der von seinem Abteilungsleiter - wohl zu Unrecht - unablässig ob seines mangelnden Arbeitseifers gerügt wurde. Die alltägliche Tirade begann regelmäßig mit der Ansprache Mein lieber Scholli und wurde so angeblich im Laufe der Zeit zum sprachlichen Allgemeingut. Solche Personalisierungen findet man bei Herkunftsvermutungen regelmäßig. Bekannte Belege sind die Familie Hempel, unter deren Sofa es verboten aussieht oder der Berliner Kneipenwirt Oskar, dessen Frechheit sprichwörtlich geworden ist. Das berühmteste Beispiel ist wohl die Wortgeschichte zum Amerikanismus okay oder o.k. Neben unzähligen anderen Herkunftsvermutungen werden immer wieder auch historische oder gar fiktive Personen als ' Erfinder ' dieses Wortes angeführt. Als ältester Kronzeuge dient dabei der ehemalige amerikanische Präsident Marten van Buren, dessen Spitzname nach seinem Geburtsort ' Old Kinderlook ' gewesen ist. Dieser soll ihm derart gut gefallen haben, dass er in späteren Jahren nur noch mit dem Kürzel O.K. unterzeichnet hat. Auch der Kekshersteller Orrin Kendall gilt vielen als Urheber des umstrittenen Wortes. Der Star unter allen Worterfindern ist ohne Zweifel der legendäre Controller am Fließband für die Montage des Modell-T in den Ford-Automobilfabriken mit Namen Oswald Kowelski. Sein Namenskürzel O.K. unter die Prüfprotokolle ist danach die Keimzelle für den weltweiten Siegeszug von okay. Diese Auslegung hat viele Sprachreiniger in Deutschland, die sich über das Eindringen des verhassten Amerikanismus echauffierten, nicht schlafen lassen. Ihren intensiven Recherchen ist die Erkenntnis zu verdanken, das der verantwortliche Qualitätsprüfer bei Ford gar kein Amerikaner, sondern ein Deutscher namens Oskar Krause gewesen und das Kürzel o.k. mithin gar kein Fremdwort sondern eine deutsche Erfindung ist. Doch zurück zu unserem Herrn Scholli. Das Rheinland hat sich an dem Abstammungswettbewerb bislang nicht beteiligt. In den rheinischen Mundarten ist Scholli nämlich weit verbreitet als Rufname für ein besonders hübsches Tier, sei es ein kleiner Hund, eine Stute, eine Kuh; daneben kann es auch die Bezeichnung für einen jungen, etwas schlacksigen Mann sein. Deshalb glauben die Rheinländer auch, dass das Wort auf das französische Wort joli (hübsch, niedlich) zurückzuführen ist, einer Annahme, der sich auch der allerneueste Duden anschließt."}}
        timeout={100000000}
        itemIndex={1}
        totalCount={100}
      />}
      { <EvalInput
        level={1}
        data={[]}
        settings={{}}
        expected={{element: "A"}}
        roundOne={[{element: "A"}, {element: "B"}]}
        roundTwo={[{element: "A"}, {element: "C"}]}
      />}
    </Frame>
  );
}
export default connect()(TestPage)