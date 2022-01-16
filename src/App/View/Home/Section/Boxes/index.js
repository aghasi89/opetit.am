import Boxes from './Boxes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMainPageImg } from '../../../../store/actions/MainPageImg';

const Boxes = () => {
    const dispatch = useDispatch();
    const imgsData = useSelector(({ box }) => box.images);

    useEffect(() => {
        dispatch(getMainPageImg());
    }, []);

    const imgsDataJSX = imgsData
    ? imgsData.map((item, indx) => {
          return (
              <div key={indx}>
                  <img
                      src={item.image}
                      alt={item.alt}
                      className="background-image"
                  />
              </div>
          );
      })
    : null;

};

export default Boxes;
