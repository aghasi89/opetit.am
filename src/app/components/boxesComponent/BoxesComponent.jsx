import './boxesComponent.css';

const BoxesComponent = ({ data, className }) => {
    return data.map((item, indx) => {
        return (
            <div className={className} key={indx}>
                <img src={item.img} alt={`img_${indx}`} />
                <h2 className="images_block_h2">{item.name}</h2>
                <p className="images_block_p">{item.description}</p>
            </div>
        );
    });
};

export default BoxesComponent;
