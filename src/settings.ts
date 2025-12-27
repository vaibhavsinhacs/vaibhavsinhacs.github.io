export const profile = {
	fullName: 'Vaibhav Sinha',
	title: 'PhD Student in Computer Science',
	institute: 'University of Cincinnati',
	author_name: 'Vaibhav Sinha', // Author name to be highlighted in the papers section
	research_areas: [
        {
            title: 'Robust Machine Learning',
            description: 'Developing models that perform reliably by learning effectively from small, skewed, or noisy datasets.',
            field: 'robustness'
        },
        {
            title: 'Multimodal Representation',
            description: 'Designing models that can navigate complex, heterogeneous information streams to capture nuanced context.',
            field: 'multimodal'
        },
        {
            title: 'Trustworthy AI',
            description: 'Ensuring machine learning systems are interpretable, fair, and transparent for deployment in critical environments.',
            field: 'trustworthy'
        },
    ],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'sinhavv@mail.uc.edu',
	linkedin: 'https://www.linkedin.com/in/sinha-vaibhav/',
	x: '',
	bluesky: '',
	github: 'https://github.com/vaibhavsinhacs',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=bKsZGsQAAAAJ&hl=en',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://vaibhavsinhacs.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Vaibhav Sinha | CS PhD Student',
	default_description: 'Personal website and research portfolio of Vaibhav Sinha, PhD student in Computer Science.',
	default_image: '/images/astro-academia.png',
}
