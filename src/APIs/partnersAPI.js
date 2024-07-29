const serverHost = 'http://localhost:4000';

const getPartners = async () => {
    let partnersData = await fetch(`${serverHost}/partners`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return partnersData?.length > 0 ? partnersData : [];
};

const getPartner = async (path) => {
    const pathArr = path.split('/');
    const pathName = pathArr[pathArr.length - 1];
    let partnersData = await fetch(`${serverHost}/partners/detail/${pathName}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(error));
    return partnersData.name ? partnersData : {};
};

const getFullPartners = async (type) => {
    let partnersData = await fetch(`${serverHost}/partners/${type}`)
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(`Lỗi khi getFullPartners: ${error}`));
    return partnersData?.length > 0 ? partnersData : [];
};

const getPartnerByID = async (id) => {
    let partnerData = await fetch(`${serverHost}/partners/partnerByID?q=${id}`, { method: 'GET' })
        .then((responce) => responce.json())
        .then((data) => data)
        .catch((error) => alert(`Lỗi khi getPartnerById: ${error}`));
    
    return partnerData;
};

const agreePartner = async ({partnerID, state}) => {
    const data = await fetch(`${serverHost}/partners/agree/${state}/${partnerID}`, {method:'PUT'}).then(res => res).catch(error => alert(error))
    return data
}

const updatePartner = (partnerData) => {
    return `${serverHost}/partners/${partnerData._id}?_method=PUT`
}

const addPartner = () => {
    return `${serverHost}/partners/store`;
}

const deletePartner = async (partnerID) => {
    alert('sẽ xóa')
    const data = await fetch(`${serverHost}/partners/${partnerID}`, {method:'DELETE'}).then(res => console.log(res)).catch(error => alert(error))
    return data
}

export {getPartner, getPartners, getFullPartners, getPartnerByID, agreePartner, updatePartner, addPartner, deletePartner}