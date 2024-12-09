// app/components/footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center">&copy; {new Date().getFullYear()} Your Store. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  