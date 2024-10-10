import SelectCountry from '@/app/_components/SelectCountry';
import UpdateProfileForm from '@/app/_components/UpdateProfileForm';

export const metadata = {
	title: 'Update Profile',
};

export default function Page() {
	const countryFlag = 'pt.jpg';
	const nationality = 'portugal';

	return (
		<div>
			<h2 className="font-semibold text-2xl text-accent-400 mb-4">
				Update your guest profile
			</h2>

			<p className="text-lg mb-8 text-primary-200">
				Providing the following information will make your check-in process
				faster and smoother. See you soon!
			</p>
			<UpdateProfileForm>
				{/* down here is the server component, that fetches data from the API and builds a list of countries on the server and only than it comes to the props of the client component as a static generated instance of server component*/}
				<SelectCountry
					name="nationality"
					id="nationality"
					className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
					defaultCountry={nationality}
				/>
			</UpdateProfileForm>
		</div>
	);
}
