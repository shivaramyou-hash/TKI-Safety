'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ new: 0, inprogress: 0, completed: 0 });
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin');
      } else {
        fetchRequests();
      }
    };

    checkUser();
  }, [router]);

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from('contact_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching requests:', error);
    } else {
      setRequests(data);
      calculateStats(data);
    }
    setLoading(false);
  };

  const calculateStats = (data) => {
    const newCount = data.filter(r => r.status === 'New' || !r.status).length; // Default to New if null
    const inProgressCount = data.filter(r => r.status === 'Inprogress').length;
    const completedCount = data.filter(r => r.status === 'Completed').length;
    setStats({ new: newCount, inprogress: inProgressCount, completed: completedCount });
  };

  const updateStatus = async (id, newStatus) => {
    const { error } = await supabase
      .from('contact_requests')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    } else {
      fetchRequests(); // Refresh data to update stats and table
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* Custom Admin Header */}
      <div className="bg-white shadow-sm py-3 mb-5">
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="mb-0 text-primary fw-bold" style={{ fontSize: '1.5rem' }}>Admin Dashboard</h2>
          <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt me-2"></i>Logout
          </button>
        </div>
      </div>

      <div className="container">
        {/* Status Cards */}
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100" style={{ borderLeft: '5px solid #009fe3' }}>
              <div className="card-body d-flex align-items-center">
                <div className="rounded-circle bg-light-primary p-3 me-3" style={{ backgroundColor: 'rgba(0, 159, 227, 0.1)', color: '#009fe3' }}>
                  <i className="fas fa-envelope-open-text fa-2x"></i>
                </div>
                <div>
                  <h6 className="text-muted text-uppercase mb-1" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>New Requests</h6>
                  <h3 className="mb-0 fw-bold text-dark">{stats.new}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100" style={{ borderLeft: '5px solid #ffc107' }}>
              <div className="card-body d-flex align-items-center">
                <div className="rounded-circle bg-light-warning p-3 me-3" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', color: '#ffc107' }}>
                  <i className="fas fa-spinner fa-2x"></i>
                </div>
                <div>
                  <h6 className="text-muted text-uppercase mb-1" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>In Progress</h6>
                  <h3 className="mb-0 fw-bold text-dark">{stats.inprogress}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100" style={{ borderLeft: '5px solid #28a745' }}>
              <div className="card-body d-flex align-items-center">
                <div className="rounded-circle bg-light-success p-3 me-3" style={{ backgroundColor: 'rgba(40, 167, 69, 0.1)', color: '#28a745' }}>
                  <i className="fas fa-check-circle fa-2x"></i>
                </div>
                <div>
                  <h6 className="text-muted text-uppercase mb-1" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>Completed</h6>
                  <h3 className="mb-0 fw-bold text-dark">{stats.completed}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requests Table */}
        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
          <div className="card-header bg-white py-3 border-bottom-0">
             <h5 className="mb-0 fw-bold text-dark">Recent Inquiries</h5>
          </div>
          <div className="table-responsive">
            <table className="table table-hover mb-0 align-middle">
              <thead className="bg-light text-secondary">
                <tr>
                  <th className="py-3 px-4 fw-semibold border-0">Date</th>
                  <th className="py-3 px-4 fw-semibold border-0">Contact Details</th>
                  <th className="py-3 px-4 fw-semibold border-0">Inquiry Type</th>
                  <th className="py-3 px-4 fw-semibold border-0">Message</th>
                  <th className="py-3 px-4 fw-semibold border-0">Status</th>
                  <th className="py-3 px-4 fw-semibold border-0 text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {requests.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-5 text-muted">No contact requests found.</td>
                  </tr>
                ) : (
                  requests.map((request) => (
                    <tr key={request.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td className="px-4 text-secondary">{new Date(request.created_at).toLocaleDateString()}</td>
                      <td className="px-4">
                        <div className="d-flex flex-column">
                          <span className="fw-bold text-dark">{request.fname} {request.lname}</span>
                          <span className="small text-muted">{request.email}</span>
                          <span className="small text-muted">{request.phone}</span>
                        </div>
                      </td>
                      <td className="px-4"><span className="badge bg-light text-dark border">{request.inquirytype}</span></td>
                      <td className="px-4 text-wrap text-secondary" style={{ maxWidth: '300px' }}>{request.message}</td>
                      <td className="px-4">
                        <span className={`badge rounded-pill px-3 py-2 ${
                          request.status === 'Completed' ? 'bg-success' :
                          request.status === 'Inprogress' ? 'bg-warning text-dark' :
                          'bg-primary'
                        }`}>
                          {request.status || 'New'}
                        </span>
                      </td>
                      <td className="px-4 text-end">
                        <div className="dropdown">
                          <button className="btn btn-sm btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Update
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                            <li><button className="dropdown-item" onClick={() => updateStatus(request.id, 'New')}>Mark as New</button></li>
                            <li><button className="dropdown-item" onClick={() => updateStatus(request.id, 'Inprogress')}>Mark as In Progress</button></li>
                            <li><button className="dropdown-item" onClick={() => updateStatus(request.id, 'Completed')}>Mark as Completed</button></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
