import './Booking.scss';
import Content from './../Content';
import Form from './Form';

export default function Booking({classes}) {
    return (
        <section id="booking" className={classes}>
            <section className="booking-wrapper">
                <Form />
                <Content subTitle="میز های درجه یک رزرو کنید"  title="میز خود را برای شام های خصوصی و ساعات شاد رزرو کنید"/>
            </section>
        </section>
    )
}
