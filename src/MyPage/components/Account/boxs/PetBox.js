import uuid from 'react-uuid';
import { Icon } from '@iconify/react';
import { Box } from '../styles/style';

export const PetBox = ({ userPets, petPics, IMAGE }) => {
    return (
        <Box className="pet-box">
            <Icon icon="carbon:dog-walker" />
            {userPets.length === 0 ? (
                <p className="noPet-text">등록된 반려견이 없습니다.</p>
            ) : (
                <div className="container">
                    {userPets.map((item, idx) => (
                        <div className="item pet" key={uuid()}>
                            <img
                                className="picture"
                                src={
                                    petPics[idx] === null ? IMAGE : petPics[idx]
                                }
                                alt="반려견 사진"
                                width={90}
                                height={90}
                            />
                            {item.petName}
                        </div>
                    ))}
                </div>
            )}
        </Box>
    );
};
