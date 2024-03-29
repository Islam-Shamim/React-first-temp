import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 my-2 p-4'>
            <h1 className='text-4xl font-bold '>First Template</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;