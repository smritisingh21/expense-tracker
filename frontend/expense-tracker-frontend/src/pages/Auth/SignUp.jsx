import React ,{useState}from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/layouts/Input'
import {useNavigate , Link} from 'react-router-dom'
import ProfilePicSelector from '../../components/ProfilePicSelector';

// SignUp component for user registration

export default function Signup() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

 const  handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }}

  const navigate = useNavigate();

  return (

    <AuthLayout>
      <div className='lg:w-70% h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className=' text-3xl font-medium  p-2'>
          Create an account</h3>
        <p>
          Join us today by entering your details below
        </p>
        <form onSubmit={handleSignup}>
          <ProfilePicSelector
          image ={profilePicture}
          setImage={setProfilePicture}/>

          <div className='flex flex-col gap-4'>

            <Input
              type="text"
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
            <Input
              type="text"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="" />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
            />
          <div>  
            {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
            <button type='submit' className='btn-primary'>
              SIGN UP
            </button>
            <p className='text-[13px] text-slate-800 mt-3'>
              Already have an account? {' '}
              <Link to="/login" className='text-primary onhover:underline font-medium'>
              LOGIN
              </Link>
            </p></div>
          </div>
         </form>
      </div>
    </AuthLayout>
    )
}
