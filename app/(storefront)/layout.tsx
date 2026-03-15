import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { CartDrawer } from "@/components/storefront/cart-drawer";
import { QuickViewModal } from "@/components/shared/quick-view-modal";

export default function StorefrontLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <QuickViewModal />
        </div>
    );
}
