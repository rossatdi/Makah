import KofiButton from 'kofi-button';
import { Helmet } from 'react-helmet';
import useScreenSize from '../../hooks/UseScreenSize';
import ScreenSize from '../../types/ScreenSize';
import './IntroductionPage.css'

const IntroductionPage = () => {
    const screenSize = useScreenSize();
    return(<div>
        <Helmet>
            <title>Makah</title>
        </Helmet>
        <h1>INTRODUCTION</h1>
        <hr/>
        <p>The Makah Incident was born out of a desire to play a 40k inspired skirmish game that was fast and balanced game and
        emphasised fun and freedom over complex mechanics. While the 2021 Kill Team is an impressive ruleset, it has a number
        of complexities that slows down play. I wanted something faster.</p>
        <p>The other inspiration for the game, is the Inquisitor28 movement (for lack of a better word). While the ruleset here covers
        most of the main 40k factions, I actually started with the idea of it being focused on Inquisitorial forces. I hope that the
        rules provide a base that encourages people to experiment and have fun.</p>
        <h4>STRUCTURE</h4>
        <p>The first section of this book covers the basic game rules and crew selection process, followed by generic weapons, special
        rules and skills. Then each faction is set out, with their specific operatives, weapons and other advantages. Finally, are the
        embryonic rules for a narrative campaign. This will be developed more but is currently included more ‘direction of travel’
        than destination. In future, additional rules for a Tabletop RPG implementation and asymmetric conflicts will be added.</p>
        <h4>INTENTION</h4>
        <p>This rules-set should never be used for a competitive ‘tournament’. I’m sure it’s too easy to break for that. That being said,
        it should be possible to pull together a small squad of miniatures and have a good closely fought game within an hour or
        so. A tough game you lose narrowly is more fun than one where you curb stomp your opponent, and that’s the principle
        I’ve tried to use in the game design and that I hope people approach it.</p>
        <h4>DEVELOPMENT</h4>
        <p>Joe, Jack, Paul, Sam and James – you know who you are. Thank you for all the input and suggestions.</p>
        <p>I am (clearly!) not a professional games developer. This is very much a work in progress. If you pick this up and either play
        it or just have helpful suggestions, I’d always love to hear them. You can email me at rossatdi@gmail.com. Put Makah in the
        subject line so I know to actually read it.</p>
        <div className='blurredImg'/>
        
        {false && screenSize < ScreenSize.lg && 
        <><div className="footer bg-dark">
            <KofiButton  color="#0a9396" title="Donate" kofiID="" />
        </div>
        <div className="spacer"></div></>}
        </div>)
}


export default IntroductionPage;