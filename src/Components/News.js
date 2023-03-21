import {Box} from './Box'

export const News = () => {
    return (

        <section className="news_section layout_padding">
            <div className="container">
                <div className="d-flex flex-column align-items-end">
                    <div className="custom_heading-container">
                        <h2>
                            Letest News
                        </h2>

                    </div>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority
                    </p>
                </div>
                <div className="row">
                 <Box src="images/n-3.png"/>
                 <Box src="images/n-2.jpg"/>
                 <Box src="images/n-1.jpg"/>
                </div>
            </div>
        </section>
    )
}