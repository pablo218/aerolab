import choose from 'assets/illustrations/walkthroug-2-desktop.png';
import chooseIcon from 'assets/icons/walkthrough-3.svg';
import browse from 'assets/illustrations/walkthroug-1-desktop.png';
import browseIcon from 'assets/icons/walkthrough-1.svg';
import enjoy from 'assets/illustrations/walkthroug-3-desktop.png';
import enjoyIcon from 'assets/icons/walkthrough-2.svg';

export type CardType = 'browse' | 'choose' | 'enjoy'

export interface CardsTypes {
    BROWSE: 'browse',
    CHOOSE: 'choose',
    ENJOY: 'enjoy'
}

export const cardsTypes: CardsTypes = {
    BROWSE: 'browse',
    CHOOSE: 'choose',
    ENJOY: 'enjoy'
}

export const cards = [
    {   
        card: cardsTypes.BROWSE,
        image: browse,
        icon: browseIcon
    },
    {   
        card: cardsTypes.CHOOSE,
        image: choose,
        icon: chooseIcon
    },
    {   
        card: cardsTypes.ENJOY,
        image: enjoy,
        icon: enjoyIcon
    }
]