import uuid from 'react-uuid';

export const PetBox = ({ userPets, petPics, IMAGE }) => {
    return (
        <div className="pet-box">
            나의 가족
            {userPets.length === 0 ? (
                <p className="noPet-text">등록된 반려견이 없습니다.</p>
            ) : (
                userPets.map((item, idx) => (
                    <div className="pet-item" key={uuid()}>
                        <img
                            className="pet-pic"
                            src={petPics[idx] === null ? IMAGE : petPics[idx]}
                            alt="반려견 사진"
                            width={90}
                            height={90}
                        />
                        {item.petName}
                    </div>
                ))
            )}
        </div>
    );
};
