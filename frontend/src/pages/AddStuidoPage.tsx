import MainLayout from "../components/layouts/MainLayout";
import AddStudioForm from "../components/studio/AddStudioForm";

const AddStuidoPage = () => {
  return (
    <MainLayout>
      <div className="flex justify-center">
        <AddStudioForm />
      </div>
    </MainLayout>
  );
};

export default AddStuidoPage;
