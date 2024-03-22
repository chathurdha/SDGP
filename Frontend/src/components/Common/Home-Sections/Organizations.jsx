
const Organizations = () => {
  const organizations = [
    {
      _id: 1,
      name: "Organization 1",
      volunteerCount: 100,
    },
    {
      _id: 2,
      name: "Organization 2",
      volunteerCount: 150,
    },
    {
      _id: 3,
      name: "Organization 3",
      volunteerCount: 200,
    },
    {
      _id: 4,
      name: "Organization 4",
      volunteerCount: 80,
    },
    {
      _id: 5,
      name: "Organization 5",
      volunteerCount: 120,
    },
    {
      _id: 6,
      name: "Organization 6",
      volunteerCount: 90,
    },
    // Add more organizations as needed
  ];

  // Sort organizations by volunteer count in descending order
  const sortedOrganizations = organizations.sort(
    (a, b) => b.volunteerCount - a.volunteerCount
  );

  // Get the top 6 organizations
  const topOrganizations = sortedOrganizations.slice(0, 6);
  const [organizationData, setOrganizationData] = useState([]);
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/organizations"
        );
        setOrganizationData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching seminar data:", error);
      }
    };

    fetchOrganizations();
  }, []);

  // Render Organization Cards
  const renderOrganizationCards = () => {
    return topOrganizations.map((organization) => (
      <div
        key={organization._id}
        className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md m-4 w-[10%] h-50"
        style={{ minWidth: "200px" }} // Adjust width if necessary
      >
        <img
          className="h-20 w-20 object-cover rounded-full"
          src={`/src/assets/${organization._id}.jpeg`}
          alt={organization.name}
        />
        <h2 className="text-lg font-semibold mt-4 mb-2">{organization.name}</h2>
        <p className="text-sm text-gray-500">
          No. of volunteers: {organization.volunteerCount}
        </p>
      </div>
    ));
  };

  return (
    <div className="w-screen flex justify-center items-center bg-gradient-to-t from-[#D9ECFF] to-white">
      <div className="w-[80%] h-full pb-14">
        <h1 className="pt-8 text-[#323232] md:pt-16 text-3xl text-center font-roboto font-bold">
          Top <span className="text-custom-green">Organizations</span>
        </h1>
        <div className="flex flex-wrap justify-center mt-10">
          {renderOrganizationCards()}
        </div>
      </div>
    </div>
  );
};

export default Organizations;
