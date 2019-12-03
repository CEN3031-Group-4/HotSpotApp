const nuclides = [
    {label:'Ac-224', value:'Ac-224'},
    {label:'Ac-225', value:'Ac-225'},
    {label:'Ac-226', value:'Ac-226'},
    {label:'Ac-227', value:'Ac-227'},
    {label:'Ac-228', value:'Ac-228'},
    {label:'Ag-101', value:'Ag-101'},
    {label:'Ag-102', value:'Ag-102'},
    {label:'Ag-103', value:'Ag-103'},
    {label:'Ag-104', value:'Ag-104'},
    {label:'Ag-104m', value:'Ag-104m'},
    {label:'Ag-105', value:'Ag-105'},
    {label:'Ag-106', value:'Ag-106'},
    {label:'Ag-106m', value:'Ag-106m'},
    {label:'Ag-108m', value:'Ag-108m'},
    {label:'Ag-110m', value:'Ag-110m'},
    {label:'Ag-111', value:'Ag-111'},
    {label:'Ag-112', value:'Ag-112'},
    {label:'Ag-113', value:'Ag-113'},
    {label:'Ag-115', value:'Ag-115'},
    {label:'Al-26', value:'Al-26'},
    {label:'Am-237', value:'Am-237'},
    {label:'Am-238', value:'Am-238'},
    {label:'Am-239', value:'Am-239'},
    {label:'Am-240', value:'Am-240'},
    {label:'Am-241', value:'Am-241'},
    {label:'Am-242', value:'Am-242'},
    {label:'Am-242m', value:'Am-242m'},
    {label:'Am-243', value:'Am-243'},
    {label:'Am-244', value:'Am-244'},
    {label:'Am-244m', value:'Am-244m'},
    {label:'Am-245', value:'Am-245'},
    {label:'Am-246', value:'Am-246'},
    {label:'Am-246m', value:'Am-246m'},
    {label:'Am-247', value:'Am-247'},
    {label:'As-69', value:'As-69'},
    {label:'As-70', value:'As-70'},
    {label:'As-71', value:'As-71'},
    {label:'As-72', value:'As-72'},
    {label:'As-73', value:'As-73'},
    {label:'As-74', value:'As-74'},
    {label:'As-76', value:'As-76'},
    {label:'As-77', value:'As-77'},
    {label:'As-78', value:'As-78'},
    {label:'At-205', value:'At-205'},
    {label:'At-206', value:'At-206'},
    {label:'At-207', value:'At-207'},
    {label:'At-208', value:'At-208'},
    {label:'At-209', value:'At-209'},
    {label:'At-210', value:'At-210'},
    {label:'At-211', value:'At-211'},
    {label:'Au-186', value:'Au-186'},
    {label:'Au-190', value:'Au-190'},
    {label:'Au-191', value:'Au-191'},
    {label:'Au-192', value:'Au-192'},
    {label:'Au-193', value:'Au-193'},
    {label:'Au-194', value:'Au-194'},
    {label:'Au-195', value:'Au-195'},
    {label:'Au-196', value:'Au-196'},
    {label:'Au-196m', value:'Au-196m'},
    {label:'Au-198', value:'Au-198'},
    {label:'Au-198m', value:'Au-198m'},
    {label:'Au-199', value:'Au-199'},
    {label:'Au-200', value:'Au-200'},
    {label:'Au-200m', value:'Au-200m'},
    {label:'Au-201', value:'Au-201'},
    {label:'Ba-124', value:'Ba-124'},
    {label:'Ba-126', value:'Ba-126'},
    {label:'Ba-127', value:'Ba-127'},
    {label:'Ba-128', value:'Ba-128'},
    {label:'Ba-129', value:'Ba-129'},
    {label:'Ba-129m', value:'Ba-129m'},
    {label:'Ba-131', value:'Ba-131'},
    {label:'Ba-131m', value:'Ba-131m'},
    {label:'Ba-133', value:'Ba-133'},
    {label:'Ba-133m', value:'Ba-133m'},
    {label:'Ba-135m', value:'Ba-135m'},
    {label:'Ba-139', value:'Ba-139'},
    {label:'Ba-140', value:'Ba-140'},
    {label:'Ba-141', value:'Ba-141'},
    {label:'Ba-142', value:'Ba-142'},
    {label:'Be-10', value:'Be-10'},
    {label:'Be-7', value:'Be-7'},
    {label:'Bi-200', value:'Bi-200'},
    {label:'Bi-201', value:'Bi-201'},
    {label:'Bi-202', value:'Bi-202'},
    {label:'Bi-203', value:'Bi-203'},
    {label:'Bi-204', value:'Bi-204'},
    {label:'Bi-205', value:'Bi-205'},
    {label:'Bi-206', value:'Bi-206'},
    {label:'Bi-207', value:'Bi-207'},
    {label:'Bi-208', value:'Bi-208'},
    {label:'Bi-210', value:'Bi-210'},
    {label:'Bi-210m', value:'Bi-210m'},
    {label:'Bi-212', value:'Bi-212'},
    {label:'Bi-213', value:'Bi-213'},
    {label:'Bi-214', value:'Bi-214'},
    {label:'Bk-245', value:'Bk-245'},
    {label:'Bk-246', value:'Bk-246'},
    {label:'Bk-247', value:'Bk-247'},
    {label:'Bk-248m', value:'Bk-248m'},
    {label:'Bk-249', value:'Bk-249'},
    {label:'Bk-250', value:'Bk-250'},
    {label:'Bk-251', value:'Bk-251'},
    {label:'Br-74', value:'Br-74'},
    {label:'Br-74m', value:'Br-74m'},
    {label:'Br-75', value:'Br-75'},
    {label:'Br-76', value:'Br-76'},
    {label:'Br-77', value:'Br-77'},
    {label:'Br-80', value:'Br-80'},
    {label:'Br-80m', value:'Br-80m'},
    {label:'Br-82', value:'Br-82'},
    {label:'Br-83', value:'Br-83'},
    {label:'Br-84', value:'Br-84'},
    {label:'C-11', value:'C-11'},
    {label:'C-14', value:'C-14'},
    {label:'Ca-41', value:'Ca-41'},
    {label:'Ca-45', value:'Ca-45'},
    {label:'Ca-47', value:'Ca-47'},
    {label:'Cd-104', value:'Cd-104'},
    {label:'Cd-105', value:'Cd-105'},
    {label:'Cd-107', value:'Cd-107'},
    {label:'Cd-109', value:'Cd-109'},
    {label:'Cd-111m', value:'Cd-111m'},
    {label:'Cd-113', value:'Cd-113'},
    {label:'Cd-113m', value:'Cd-113m'},
    {label:'Cd-115', value:'Cd-115'},
    {label:'Cd-115m', value:'Cd-115m'},
    {label:'Cd-117', value:'Cd-117'},
    {label:'Cd-117m', value:'Cd-117m'},
    {label:'Cd-118', value:'Cd-118'},
    {label:'Ce-130', value:'Ce-130'},
    {label:'Ce-131', value:'Ce-131'},
    {label:'Ce-132', value:'Ce-132'},
    {label:'Ce-133', value:'Ce-133'},
    {label:'Ce-133m', value:'Ce-133m'},
    {label:'Ce-134', value:'Ce-134'},
    {label:'Ce-135', value:'Ce-135'},
    {label:'Ce-137', value:'Ce-137'},
    {label:'Ce-137m', value:'Ce-137m'},
    {label:'Ce-139', value:'Ce-139'},
    {label:'Ce-141', value:'Ce-141'},
    {label:'Ce-143', value:'Ce-143'},
    {label:'Ce-144', value:'Ce-144'},
    {label:'Cf-244', value:'Cf-244'},
    {label:'Cf-246', value:'Cf-246'},
    {label:'Cf-247', value:'Cf-247'},
    {label:'Cf-248', value:'Cf-248'},
    {label:'Cf-249', value:'Cf-249'},
    {label:'Cf-250', value:'Cf-250'},
    {label:'Cf-251', value:'Cf-251'},
    {label:'Cf-252', value:'Cf-252'},
    {label:'Cf-253', value:'Cf-253'},
    {label:'Cf-254', value:'Cf-254'},
    {label:'Cf-255', value:'Cf-255'},
    {label:'Cl-34m', value:'Cl-34m'},
    {label:'Cl-36', value:'Cl-36'},
    {label:'Cl-38', value:'Cl-38'},
    {label:'Cl-39', value:'Cl-39'},
    {label:'Cm-238', value:'Cm-238'},
    {label:'Cm-239', value:'Cm-239'},
    {label:'Cm-240', value:'Cm-240'},
    {label:'Cm-241', value:'Cm-241'},
    {label:'Cm-242', value:'Cm-242'},
    {label:'Cm-243', value:'Cm-243'},
    {label:'Cm-244', value:'Cm-244'},
    {label:'Cm-245', value:'Cm-245'},
    {label:'Cm-246', value:'Cm-246'},
    {label:'Cm-247', value:'Cm-247'},
    {label:'Cm-248', value:'Cm-248'},
    {label:'Cm-249', value:'Cm-249'},
    {label:'Cm-250', value:'Cm-250'},
    {label:'Cm-251', value:'Cm-251'},
    {label:'Co-55', value:'Co-55'},
    {label:'Co-56', value:'Co-56'},
    {label:'Co-57', value:'Co-57'},
    {label:'Co-58', value:'Co-58'},
    {label:'Co-58m', value:'Co-58m'},
    {label:'Co-60', value:'Co-60'},
    {label:'Co-60m', value:'Co-60m'},
    {label:'Co-61', value:'Co-61'},
    {label:'Co-62m', value:'Co-62m'},
    {label:'Cr-48', value:'Cr-48'},
    {label:'Cr-49', value:'Cr-49'},
    {label:'Cr-51', value:'Cr-51'},
    {label:'Cs-125', value:'Cs-125'},
    {label:'Cs-127', value:'Cs-127'},
    {label:'Cs-129', value:'Cs-129'},
    {label:'Cs-130', value:'Cs-130'},
    {label:'Cs-131', value:'Cs-131'},
    {label:'Cs-132', value:'Cs-132'},
    {label:'Cs-134', value:'Cs-134'},
    {label:'Cs-134m', value:'Cs-134m'},
    {label:'Cs-135', value:'Cs-135'},
    {label:'Cs-135m', value:'Cs-135m'},
    {label:'Cs-136', value:'Cs-136'},
    {label:'Cs-137', value:'Cs-137'},
    {label:'Cs-138', value:'Cs-138'},
    {label:'Cu-60', value:'Cu-60'},
    {label:'Cu-61', value:'Cu-61'},
    {label:'Cu-64', value:'Cu-64'},
    {label:'Cu-67', value:'Cu-67'},
    {label:'Dy-151', value:'Dy-151'},
    {label:'Dy-152', value:'Dy-152'},
    {label:'Dy-153', value:'Dy-153'},
    {label:'Dy-154', value:'Dy-154'},
    {label:'Dy-155', value:'Dy-155'},
    {label:'Dy-157', value:'Dy-157'},
    {label:'Dy-159', value:'Dy-159'},
    {label:'Dy-165', value:'Dy-165'},
    {label:'Dy-166', value:'Dy-166'},
    {label:'Er-156', value:'Er-156'},
    {label:'Er-159', value:'Er-159'},
    {label:'Er-161', value:'Er-161'},
    {label:'Er-163', value:'Er-163'},
    {label:'Er-165', value:'Er-165'},
    {label:'Er-169', value:'Er-169'},
    {label:'Er-171', value:'Er-171'},
    {label:'Er-172', value:'Er-172'},
    {label:'Es-249', value:'Es-249'},
    {label:'Es-250', value:'Es-250'},
    {label:'Es-250m', value:'Es-250m'},
    {label:'Es-251', value:'Es-251'},
    {label:'Es-253', value:'Es-253'},
    {label:'Es-254', value:'Es-254'},
    {label:'Es-254m', value:'Es-254m'},
    {label:'Es-255', value:'Es-255'},
    {label:'Es-256', value:'Es-256'},
    {label:'Eu-145', value:'Eu-145'},
    {label:'Eu-146', value:'Eu-146'},
    {label:'Eu-147', value:'Eu-147'},
    {label:'Eu-148', value:'Eu-148'},
    {label:'Eu-149', value:'Eu-149'},
    {label:'Eu-150', value:'Eu-150'},
    {label:'Eu-150m', value:'Eu-150m'},
    {label:'Eu-152', value:'Eu-152'},
    {label:'Eu-152m', value:'Eu-152m'},
    {label:'Eu-152n', value:'Eu-152n'},
    {label:'Eu-154', value:'Eu-154'},
    {label:'Eu-154m', value:'Eu-154m'},
    {label:'Eu-155', value:'Eu-155'},
    {label:'Eu-156', value:'Eu-156'},
    {label:'Eu-157', value:'Eu-157'},
    {label:'Eu-158', value:'Eu-158'},
    {label:'Eu-159', value:'Eu-159'},
    {label:'F-18', value:'F-18'},
    {label:'Fe-52', value:'Fe-52'},
    {label:'Fe-55', value:'Fe-55'},
    {label:'Fe-59', value:'Fe-59'},
    {label:'Fe-60', value:'Fe-60'},
    {label:'Fm-251', value:'Fm-251'},
    {label:'Fm-252', value:'Fm-252'},
    {label:'Fm-253', value:'Fm-253'},
    {label:'Fm-254', value:'Fm-254'},
    {label:'Fm-255', value:'Fm-255'},
    {label:'Fm-256', value:'Fm-256'},
    {label:'Fm-257', value:'Fm-257'},
    {label:'Fr-212', value:'Fr-212'},
    {label:'Fr-222', value:'Fr-222'},
    {label:'Fr-223', value:'Fr-223'},
    {label:'Ga-65', value:'Ga-65'},
    {label:'Ga-66', value:'Ga-66'},
    {label:'Ga-67', value:'Ga-67'},
    {label:'Ga-68', value:'Ga-68'},
    {label:'Ga-70', value:'Ga-70'},
    {label:'Ga-72', value:'Ga-72'},
    {label:'Ga-73', value:'Ga-73'},
    {label:'Gd-145', value:'Gd-145'},
    {label:'Gd-146', value:'Gd-146'},
    {label:'Gd-147', value:'Gd-147'},
    {label:'Gd-148', value:'Gd-148'},
    {label:'Gd-149', value:'Gd-149'},
    {label:'Gd-150', value:'Gd-150'},
    {label:'Gd-151', value:'Gd-151'},
    {label:'Gd-152', value:'Gd-152'},
    {label:'Gd-153', value:'Gd-153'},
    {label:'Gd-159', value:'Gd-159'},
    {label:'Ge-66', value:'Ge-66'},
    {label:'Ge-67', value:'Ge-67'},
    {label:'Ge-68', value:'Ge-68'},
    {label:'Ge-69', value:'Ge-69'},
    {label:'Ge-71', value:'Ge-71'},
    {label:'Ge-75', value:'Ge-75'},
    {label:'Ge-77', value:'Ge-77'},
    {label:'Ge-78', value:'Ge-78'},
    {label:'H-3', value:'H-3'},
    {label:'Hf-170', value:'Hf-170'},
    {label:'Hf-172', value:'Hf-172'},
    {label:'Hf-173', value:'Hf-173'},
    {label:'Hf-174', value:'Hf-174'},
    {label:'Hf-175', value:'Hf-175'},
    {label:'Hf-177m', value:'Hf-177m'},
    {label:'Hf-178m', value:'Hf-178m'},
    {label:'Hf-179m', value:'Hf-179m'},
    {label:'Hf-180m', value:'Hf-180m'},
    {label:'Hf-181', value:'Hf-181'},
    {label:'Hf-182', value:'Hf-182'},
    {label:'Hf-182m', value:'Hf-182m'},
    {label:'Hf-183', value:'Hf-183'},
    {label:'Hf-184', value:'Hf-184'},
    {label:'Hg-190', value:'Hg-190'},
    {label:'Hg-191m', value:'Hg-191m'},
    {label:'Hg-192', value:'Hg-192'},
    {label:'Hg-193', value:'Hg-193'},
    {label:'Hg-193m', value:'Hg-193m'},
    {label:'Hg-194', value:'Hg-194'},
    {label:'Hg-195', value:'Hg-195'},
    {label:'Hg-195m', value:'Hg-195m'},
    {label:'Hg-197', value:'Hg-197'},
    {label:'Hg-197m', value:'Hg-197m'},
    {label:'Hg-199m', value:'Hg-199m'},
    {label:'Hg-203', value:'Hg-203'},
    {label:'Ho-154', value:'Ho-154'},
    {label:'Ho-155', value:'Ho-155'},
    {label:'Ho-156', value:'Ho-156'},
    {label:'Ho-157', value:'Ho-157'},
    {label:'Ho-159', value:'Ho-159'},
    {label:'Ho-160', value:'Ho-160'},
    {label:'Ho-161', value:'Ho-161'},
    {label:'Ho-162', value:'Ho-162'},
    {label:'Ho-162m', value:'Ho-162m'},
    {label:'Ho-163', value:'Ho-163'},
    {label:'Ho-164', value:'Ho-164'},
    {label:'Ho-164m', value:'Ho-164m'},
    {label:'Ho-166', value:'Ho-166'},
    {label:'Ho-166m', value:'Ho-166m'},
    {label:'Ho-167', value:'Ho-167'},
    {label:'I-118', value:'I-118'},
    {label:'I-119', value:'I-119'},
    {label:'I-120', value:'I-120'},
    {label:'I-120m', value:'I-120m'},
    {label:'I-121', value:'I-121'},
    {label:'I-123', value:'I-123'},
    {label:'I-124', value:'I-124'},
    {label:'I-125', value:'I-125'},
    {label:'I-126', value:'I-126'},
    {label:'I-128', value:'I-128'},
    {label:'I-129', value:'I-129'},
    {label:'I-130', value:'I-130'},
    {label:'I-131', value:'I-131'},
    {label:'I-132', value:'I-132'},
    {label:'I-132m', value:'I-132m'},
    {label:'I-133', value:'I-133'},
    {label:'I-134', value:'I-134'},
    {label:'I-135', value:'I-135'},
    {label:'In-107', value:'In-107'},
    {label:'In-108', value:'In-108'},
    {label:'In-108m', value:'In-108m'},
    {label:'In-109', value:'In-109'},
    {label:'In-110', value:'In-110'},
    {label:'In-110m', value:'In-110m'},
    {label:'In-111', value:'In-111'},
    {label:'In-112', value:'In-112'},
    {label:'In-112m', value:'In-112m'},
    {label:'In-113m', value:'In-113m'},
    {label:'In-114m', value:'In-114m'},
    {label:'In-115', value:'In-115'},
    {label:'In-115m', value:'In-115m'},
    {label:'In-116m', value:'In-116m'},
    {label:'In-117', value:'In-117'},
    {label:'In-117m', value:'In-117m'},
    {label:'In-119m', value:'In-119m'},
    {label:'Ir-182', value:'Ir-182'},
    {label:'Ir-183', value:'Ir-183'},
    {label:'Ir-184', value:'Ir-184'},
    {label:'Ir-185', value:'Ir-185'},
    {label:'Ir-186', value:'Ir-186'},
    {label:'Ir-186m', value:'Ir-186m'},
    {label:'Ir-187', value:'Ir-187'},
    {label:'Ir-188', value:'Ir-188'},
    {label:'Ir-189', value:'Ir-189'},
    {label:'Ir-190', value:'Ir-190'},
    {label:'Ir-190m', value:'Ir-190m'},
    {label:'Ir-190n', value:'Ir-190n'},
    {label:'Ir-192', value:'Ir-192'},
    {label:'Ir-192n', value:'Ir-192n'},
    {label:'Ir-193m', value:'Ir-193m'},
    {label:'Ir-194', value:'Ir-194'},
    {label:'Ir-194m', value:'Ir-194m'},
    {label:'Ir-195', value:'Ir-195'},
    {label:'Ir-195m', value:'Ir-195m'},
    {label:'Ir-196m', value:'Ir-196m'},
    {label:'K-40', value:'K-40'},
    {label:'K-42', value:'K-42'},
    {label:'K-43', value:'K-43'},
    {label:'K-44', value:'K-44'},
    {label:'K-45', value:'K-45'},
    {label:'La-129', value:'La-129'},
    {label:'La-131', value:'La-131'},
    {label:'La-132', value:'La-132'},
    {label:'La-132m', value:'La-132m'},
    {label:'La-133', value:'La-133'},
    {label:'La-135', value:'La-135'},
    {label:'La-137', value:'La-137'},
    {label:'La-138', value:'La-138'},
    {label:'La-140', value:'La-140'},
    {label:'La-141', value:'La-141'},
    {label:'La-142', value:'La-142'},
    {label:'La-143', value:'La-143'},
    {label:'Lu-165', value:'Lu-165'},
    {label:'Lu-167', value:'Lu-167'},
    {label:'Lu-169', value:'Lu-169'},
    {label:'Lu-170', value:'Lu-170'},
    {label:'Lu-171', value:'Lu-171'},
    {label:'Lu-172', value:'Lu-172'},
    {label:'Lu-173', value:'Lu-173'},
    {label:'Lu-174', value:'Lu-174'},
    {label:'Lu-174m', value:'Lu-174m'},
    {label:'Lu-176', value:'Lu-176'},
    {label:'Lu-176m', value:'Lu-176m'},
    {label:'Lu-177', value:'Lu-177'},
    {label:'Lu-177m', value:'Lu-177m'},
    {label:'Lu-178', value:'Lu-178'},
    {label:'Lu-178m', value:'Lu-178m'},
    {label:'Lu-179', value:'Lu-179'},
    {label:'Mg-28', value:'Mg-28'},
    {label:'Mn-51', value:'Mn-51'},
    {label:'Mn-52', value:'Mn-52'},
    {label:'Mn-52m', value:'Mn-52m'},
    {label:'Mn-53', value:'Mn-53'},
    {label:'Mn-54', value:'Mn-54'},
    {label:'Mn-56', value:'Mn-56'},
    {label:'Mo-101', value:'Mo-101'},
    {label:'Mo-102', value:'Mo-102'},
    {label:'Mo-90', value:'Mo-90'},
    {label:'Mo-91', value:'Mo-91'},
    {label:'Mo-93', value:'Mo-93'},
    {label:'Mo-93m', value:'Mo-93m'},
    {label:'Mo-99', value:'Mo-99'},
    {label:'Na-22', value:'Na-22'},
    {label:'Na-24', value:'Na-24'},
    {label:'Nb-88', value:'Nb-88'},
    {label:'Nb-89', value:'Nb-89'},
    {label:'Nb-89m', value:'Nb-89m'},
    {label:'Nb-90', value:'Nb-90'},
    {label:'Nb-91', value:'Nb-91'},
    {label:'Nb-91m', value:'Nb-91m'},
    {label:'Nb-92', value:'Nb-92'},
    {label:'Nb-92m', value:'Nb-92m'},
    {label:'Nb-93m', value:'Nb-93m'},
    {label:'Nb-94', value:'Nb-94'},
    {label:'Nb-95', value:'Nb-95'},
    {label:'Nb-95m', value:'Nb-95m'},
    {label:'Nb-96', value:'Nb-96'},
    {label:'Nb-97', value:'Nb-97'},
    {label:'Nb-98m', value:'Nb-98m'},
    {label:'Nd-135', value:'Nd-135'},
    {label:'Nd-136', value:'Nd-136'},
    {label:'Nd-137', value:'Nd-137'},
    {label:'Nd-138', value:'Nd-138'},
    {label:'Nd-139', value:'Nd-139'},
    {label:'Nd-139m', value:'Nd-139m'},
    {label:'Nd-140', value:'Nd-140'},
    {label:'Nd-141', value:'Nd-141'},
    {label:'Nd-144', value:'Nd-144'},
    {label:'Nd-147', value:'Nd-147'},
    {label:'Nd-149', value:'Nd-149'},
    {label:'Nd-151', value:'Nd-151'},
    {label:'Nd-152', value:'Nd-152'},
    {label:'Ni-56', value:'Ni-56'},
    {label:'Ni-57', value:'Ni-57'},
    {label:'Ni-59', value:'Ni-59'},
    {label:'Ni-63', value:'Ni-63'},
    {label:'Ni-65', value:'Ni-65'},
    {label:'Ni-66', value:'Ni-66'},
    {label:'Np-232', value:'Np-232'},
    {label:'Np-233', value:'Np-233'},
    {label:'Np-234', value:'Np-234'},
    {label:'Np-235', value:'Np-235'},
    {label:'Np-236', value:'Np-236'},
    {label:'Np-236m', value:'Np-236m'},
    {label:'Np-237', value:'Np-237'},
    {label:'Np-238', value:'Np-238'},
    {label:'Np-239', value:'Np-239'},
    {label:'Np-240', value:'Np-240'},
    {label:'Np-241', value:'Np-241'},
    {label:'Os-180', value:'Os-180'},
    {label:'Os-181', value:'Os-181'},
    {label:'Os-182', value:'Os-182'},
    {label:'Os-183', value:'Os-183'},
    {label:'Os-183m', value:'Os-183m'},
    {label:'Os-185', value:'Os-185'},
    {label:'Os-186', value:'Os-186'},
    {label:'Os-189m', value:'Os-189m'},
    {label:'Os-191', value:'Os-191'},
    {label:'Os-191m', value:'Os-191m'},
    {label:'Os-193', value:'Os-193'},
    {label:'Os-194', value:'Os-194'},
    {label:'Os-196', value:'Os-196'},
    {label:'P-32', value:'P-32'},
    {label:'P-33', value:'P-33'},
    {label:'Pa-227', value:'Pa-227'},
    {label:'Pa-228', value:'Pa-228'},
    {label:'Pa-229', value:'Pa-229'},
    {label:'Pa-230', value:'Pa-230'},
    {label:'Pa-231', value:'Pa-231'},
    {label:'Pa-232', value:'Pa-232'},
    {label:'Pa-233', value:'Pa-233'},
    {label:'Pa-234', value:'Pa-234'},
    {label:'Pa-235', value:'Pa-235'},
    {label:'Pb-194', value:'Pb-194'},
    {label:'Pb-195m', value:'Pb-195m'},
    {label:'Pb-196', value:'Pb-196'},
    {label:'Pb-197m', value:'Pb-197m'},
    {label:'Pb-198', value:'Pb-198'},
    {label:'Pb-199', value:'Pb-199'},
    {label:'Pb-200', value:'Pb-200'},
    {label:'Pb-201', value:'Pb-201'},
    {label:'Pb-202', value:'Pb-202'},
    {label:'Pb-202m', value:'Pb-202m'},
    {label:'Pb-203', value:'Pb-203'},
    {label:'Pb-204m', value:'Pb-204m'},
    {label:'Pb-205', value:'Pb-205'},
    {label:'Pb-209', value:'Pb-209'},
    {label:'Pb-210', value:'Pb-210'},
    {label:'Pb-211', value:'Pb-211'},
    {label:'Pb-212', value:'Pb-212'},
    {label:'Pb-214', value:'Pb-214'},
    {label:'Pd-100', value:'Pd-100'},
    {label:'Pd-101', value:'Pd-101'},
    {label:'Pd-103', value:'Pd-103'},
    {label:'Pd-107', value:'Pd-107'},
    {label:'Pd-109', value:'Pd-109'},
    {label:'Pd-111', value:'Pd-111'},
    {label:'Pd-112', value:'Pd-112'},
    {label:'Pd-98', value:'Pd-98'},
    {label:'Pd-99', value:'Pd-99'},
    {label:'Pm-141', value:'Pm-141'},
    {label:'Pm-143', value:'Pm-143'},
    {label:'Pm-144', value:'Pm-144'},
    {label:'Pm-145', value:'Pm-145'},
    {label:'Pm-146', value:'Pm-146'},
    {label:'Pm-147', value:'Pm-147'},
    {label:'Pm-148', value:'Pm-148'},
    {label:'Pm-148m', value:'Pm-148m'},
    {label:'Pm-149', value:'Pm-149'},
    {label:'Pm-150', value:'Pm-150'},
    {label:'Pm-151', value:'Pm-151'},
    {label:'Po-203', value:'Po-203'},
    {label:'Po-204', value:'Po-204'},
    {label:'Po-205', value:'Po-205'},
    {label:'Po-206', value:'Po-206'},
    {label:'Po-207', value:'Po-207'},
    {label:'Po-208', value:'Po-208'},
    {label:'Po-209', value:'Po-209'},
    {label:'Po-210', value:'Po-210'},
    {label:'Pr-134', value:'Pr-134'},
    {label:'Pr-134m', value:'Pr-134m'},
    {label:'Pr-135', value:'Pr-135'},
    {label:'Pr-136', value:'Pr-136'},
    {label:'Pr-137', value:'Pr-137'},
    {label:'Pr-138m', value:'Pr-138m'},
    {label:'Pr-139', value:'Pr-139'},
    {label:'Pr-142', value:'Pr-142'},
    {label:'Pr-142m', value:'Pr-142m'},
    {label:'Pr-143', value:'Pr-143'},
    {label:'Pr-144', value:'Pr-144'},
    {label:'Pr-145', value:'Pr-145'},
    {label:'Pr-146', value:'Pr-146'},
    {label:'Pr-147', value:'Pr-147'},
    {label:'Pt-184', value:'Pt-184'},
    {label:'Pt-186', value:'Pt-186'},
    {label:'Pt-187', value:'Pt-187'},
    {label:'Pt-188', value:'Pt-188'},
    {label:'Pt-189', value:'Pt-189'},
    {label:'Pt-190', value:'Pt-190'},
    {label:'Pt-191', value:'Pt-191'},
    {label:'Pt-193', value:'Pt-193'},
    {label:'Pt-193m', value:'Pt-193m'},
    {label:'Pt-195m', value:'Pt-195m'},
    {label:'Pt-197', value:'Pt-197'},
    {label:'Pt-197m', value:'Pt-197m'},
    {label:'Pt-199', value:'Pt-199'},
    {label:'Pt-200', value:'Pt-200'},
    {label:'Pt-202', value:'Pt-202'},
    {label:'Pu-232', value:'Pu-232'},
    {label:'Pu-234', value:'Pu-234'},
    {label:'Pu-235', value:'Pu-235'},
    {label:'Pu-236', value:'Pu-236'},
    {label:'Pu-237', value:'Pu-237'},
    {label:'Pu-238', value:'Pu-238'},
    {label:'Pu-239', value:'Pu-239'},
    {label:'Pu-240', value:'Pu-240'},
    {label:'Pu-241', value:'Pu-241'},
    {label:'Pu-242', value:'Pu-242'},
    {label:'Pu-243', value:'Pu-243'},
    {label:'Pu-244', value:'Pu-244'},
    {label:'Pu-245', value:'Pu-245'},
    {label:'Pu-246', value:'Pu-246'},
    {label:'Ra-223', value:'Ra-223'},
    {label:'Ra-224', value:'Ra-224'},
    {label:'Ra-225', value:'Ra-225'},
    {label:'Ra-226', value:'Ra-226'},
    {label:'Ra-227', value:'Ra-227'},
    {label:'Ra-228', value:'Ra-228'},
    {label:'Ra-230', value:'Ra-230'},
    {label:'Rb-78', value:'Rb-78'},
    {label:'Rb-79', value:'Rb-79'},
    {label:'Rb-81', value:'Rb-81'},
    {label:'Rb-81m', value:'Rb-81m'},
    {label:'Rb-82m', value:'Rb-82m'},
    {label:'Rb-83', value:'Rb-83'},
    {label:'Rb-84', value:'Rb-84'},
    {label:'Rb-84m', value:'Rb-84m'},
    {label:'Rb-86', value:'Rb-86'},
    {label:'Rb-87', value:'Rb-87'},
    {label:'Rb-88', value:'Rb-88'},
    {label:'Rb-89', value:'Rb-89'},
    {label:'Re-178', value:'Re-178'},
    {label:'Re-179', value:'Re-179'},
    {label:'Re-181', value:'Re-181'},
    {label:'Re-182', value:'Re-182'},
    {label:'Re-182m', value:'Re-182m'},
    {label:'Re-183', value:'Re-183'},
    {label:'Re-184', value:'Re-184'},
    {label:'Re-184m', value:'Re-184m'},
    {label:'Re-186', value:'Re-186'},
    {label:'Re-186m', value:'Re-186m'},
    {label:'Re-187', value:'Re-187'},
    {label:'Re-188', value:'Re-188'},
    {label:'Re-188m', value:'Re-188m'},
    {label:'Re-189', value:'Re-189'},
    {label:'Re-190m', value:'Re-190m'},
    {label:'Rh-100', value:'Rh-100'},
    {label:'Rh-101', value:'Rh-101'},
    {label:'Rh-101m', value:'Rh-101m'},
    {label:'Rh-102', value:'Rh-102'},
    {label:'Rh-102m', value:'Rh-102m'},
    {label:'Rh-103m', value:'Rh-103m'},
    {label:'Rh-105', value:'Rh-105'},
    {label:'Rh-106m', value:'Rh-106m'},
    {label:'Rh-107', value:'Rh-107'},
    {label:'Rh-97', value:'Rh-97'},
    {label:'Rh-97m', value:'Rh-97m'},
    {label:'Rh-99', value:'Rh-99'},
    {label:'Rh-99m', value:'Rh-99m'},
    {label:'Ru-103', value:'Ru-103'},
    {label:'Ru-105', value:'Ru-105'},
    {label:'Ru-106', value:'Ru-106'},
    {label:'Ru-94', value:'Ru-94'},
    {label:'Ru-95', value:'Ru-95'},
    {label:'Ru-97', value:'Ru-97'},
    {label:'S-35', value:'S-35'},
    {label:'S-38', value:'S-38'},
    {label:'Sb-115', value:'Sb-115'},
    {label:'Sb-116', value:'Sb-116'},
    {label:'Sb-116m', value:'Sb-116m'},
    {label:'Sb-117', value:'Sb-117'},
    {label:'Sb-118m', value:'Sb-118m'},
    {label:'Sb-119', value:'Sb-119'},
    {label:'Sb-120', value:'Sb-120'},
    {label:'Sb-120m', value:'Sb-120m'},
    {label:'Sb-122', value:'Sb-122'},
    {label:'Sb-124', value:'Sb-124'},
    {label:'Sb-124n', value:'Sb-124n'},
    {label:'Sb-125', value:'Sb-125'},
    {label:'Sb-126', value:'Sb-126'},
    {label:'Sb-126m', value:'Sb-126m'},
    {label:'Sb-127', value:'Sb-127'},
    {label:'Sb-128', value:'Sb-128'},
    {label:'Sb-128m', value:'Sb-128m'},
    {label:'Sb-129', value:'Sb-129'},
    {label:'Sb-130', value:'Sb-130'},
    {label:'Sb-131', value:'Sb-131'},
    {label:'Sc-43', value:'Sc-43'},
    {label:'Sc-44', value:'Sc-44'},
    {label:'Sc-44m', value:'Sc-44m'},
    {label:'Sc-46', value:'Sc-46'},
    {label:'Sc-47', value:'Sc-47'},
    {label:'Sc-48', value:'Sc-48'},
    {label:'Sc-49', value:'Sc-49'},
    {label:'Se-70', value:'Se-70'},
    {label:'Se-72', value:'Se-72'},
    {label:'Se-73', value:'Se-73'},
    {label:'Se-73m', value:'Se-73m'},
    {label:'Se-75', value:'Se-75'},
    {label:'Se-79', value:'Se-79'},
    {label:'Se-81', value:'Se-81'},
    {label:'Se-81m', value:'Se-81m'},
    {label:'Se-83', value:'Se-83'},
    {label:'Si-31', value:'Si-31'},
    {label:'Si-32', value:'Si-32'},
    {label:'Sm-140', value:'Sm-140'},
    {label:'Sm-141', value:'Sm-141'},
    {label:'Sm-141m', value:'Sm-141m'},
    {label:'Sm-142', value:'Sm-142'},
    {label:'Sm-145', value:'Sm-145'},
    {label:'Sm-146', value:'Sm-146'},
    {label:'Sm-147', value:'Sm-147'},
    {label:'Sm-148', value:'Sm-148'},
    {label:'Sm-151', value:'Sm-151'},
    {label:'Sm-153', value:'Sm-153'},
    {label:'Sm-155', value:'Sm-155'},
    {label:'Sm-156', value:'Sm-156'},
    {label:'Sn-108', value:'Sn-108'},
    {label:'Sn-109', value:'Sn-109'},
    {label:'Sn-110', value:'Sn-110'},
    {label:'Sn-111', value:'Sn-111'},
    {label:'Sn-113', value:'Sn-113'},
    {label:'Sn-113m', value:'Sn-113m'},
    {label:'Sn-117m', value:'Sn-117m'},
    {label:'Sn-119m', value:'Sn-119m'},
    {label:'Sn-121', value:'Sn-121'},
    {label:'Sn-121m', value:'Sn-121m'},
    {label:'Sn-123', value:'Sn-123'},
    {label:'Sn-123m', value:'Sn-123m'},
    {label:'Sn-125', value:'Sn-125'},
    {label:'Sn-126', value:'Sn-126'},
    {label:'Sn-127', value:'Sn-127'},
    {label:'Sn-128', value:'Sn-128'},
    {label:'Sr-80', value:'Sr-80'},
    {label:'Sr-81', value:'Sr-81'},
    {label:'Sr-82', value:'Sr-82'},
    {label:'Sr-83', value:'Sr-83'},
    {label:'Sr-85', value:'Sr-85'},
    {label:'Sr-85m', value:'Sr-85m'},
    {label:'Sr-87m', value:'Sr-87m'},
    {label:'Sr-89', value:'Sr-89'},
    {label:'Sr-90', value:'Sr-90'},
    {label:'Sr-91', value:'Sr-91'},
    {label:'Sr-92', value:'Sr-92'},
    {label:'Ta-172', value:'Ta-172'},
    {label:'Ta-173', value:'Ta-173'},
    {label:'Ta-174', value:'Ta-174'},
    {label:'Ta-175', value:'Ta-175'},
    {label:'Ta-176', value:'Ta-176'},
    {label:'Ta-177', value:'Ta-177'},
    {label:'Ta-178m', value:'Ta-178m'},
    {label:'Ta-179', value:'Ta-179'},
    {label:'Ta-180', value:'Ta-180'},
    {label:'Ta-182', value:'Ta-182'},
    {label:'Ta-182m', value:'Ta-182m'},
    {label:'Ta-183', value:'Ta-183'},
    {label:'Ta-184', value:'Ta-184'},
    {label:'Ta-185', value:'Ta-185'},
    {label:'Ta-186', value:'Ta-186'},
    {label:'Tb-147', value:'Tb-147'},
    {label:'Tb-148', value:'Tb-148'},
    {label:'Tb-149', value:'Tb-149'},
    {label:'Tb-150', value:'Tb-150'},
    {label:'Tb-151', value:'Tb-151'},
    {label:'Tb-152', value:'Tb-152'},
    {label:'Tb-153', value:'Tb-153'},
    {label:'Tb-154', value:'Tb-154'},
    {label:'Tb-155', value:'Tb-155'},
    {label:'Tb-156', value:'Tb-156'},
    {label:'Tb-156m', value:'Tb-156m'},
    {label:'Tb-156n', value:'Tb-156n'},
    {label:'Tb-157', value:'Tb-157'},
    {label:'Tb-158', value:'Tb-158'},
    {label:'Tb-160', value:'Tb-160'},
    {label:'Tb-161', value:'Tb-161'},
    {label:'Tb-163', value:'Tb-163'},
    {label:'Tc-101', value:'Tc-101'},
    {label:'Tc-104', value:'Tc-104'},
    {label:'Tc-93', value:'Tc-93'},
    {label:'Tc-93m', value:'Tc-93m'},
    {label:'Tc-94', value:'Tc-94'},
    {label:'Tc-94m', value:'Tc-94m'},
    {label:'Tc-95', value:'Tc-95'},
    {label:'Tc-95m', value:'Tc-95m'},
    {label:'Tc-96', value:'Tc-96'},
    {label:'Tc-96m', value:'Tc-96m'},
    {label:'Tc-97', value:'Tc-97'},
    {label:'Tc-97m', value:'Tc-97m'},
    {label:'Tc-98', value:'Tc-98'},
    {label:'Tc-99', value:'Tc-99'},
    {label:'Tc-99m', value:'Tc-99m'},
    {label:'Te-114', value:'Te-114'},
    {label:'Te-116', value:'Te-116'},
    {label:'Te-117', value:'Te-117'},
    {label:'Te-118', value:'Te-118'},
    {label:'Te-119', value:'Te-119'},
    {label:'Te-119m', value:'Te-119m'},
    {label:'Te-121', value:'Te-121'},
    {label:'Te-121m', value:'Te-121m'},
    {label:'Te-123', value:'Te-123'},
    {label:'Te-123m', value:'Te-123m'},
    {label:'Te-125m', value:'Te-125m'},
    {label:'Te-127', value:'Te-127'},
    {label:'Te-127m', value:'Te-127m'},
    {label:'Te-129', value:'Te-129'},
    {label:'Te-129m', value:'Te-129m'},
    {label:'Te-131', value:'Te-131'},
    {label:'Te-131m', value:'Te-131m'},
    {label:'Te-132', value:'Te-132'},
    {label:'Te-133', value:'Te-133'},
    {label:'Te-133m', value:'Te-133m'},
    {label:'Te-134', value:'Te-134'},
    {label:'Th-226', value:'Th-226'},
    {label:'Th-227', value:'Th-227'},
    {label:'Th-228', value:'Th-228'},
    {label:'Th-229', value:'Th-229'},
    {label:'Th-230', value:'Th-230'},
    {label:'Th-231', value:'Th-231'},
    {label:'Th-232', value:'Th-232'},
    {label:'Th-233', value:'Th-233'},
    {label:'Th-234', value:'Th-234'},
    {label:'Th-236', value:'Th-236'},
    {label:'Ti-44', value:'Ti-44'},
    {label:'Ti-45', value:'Ti-45'},
    {label:'Tl-194', value:'Tl-194'},
    {label:'Tl-194m', value:'Tl-194m'},
    {label:'Tl-195', value:'Tl-195'},
    {label:'Tl-196', value:'Tl-196'},
    {label:'Tl-197', value:'Tl-197'},
    {label:'Tl-198', value:'Tl-198'},
    {label:'Tl-198m', value:'Tl-198m'},
    {label:'Tl-199', value:'Tl-199'},
    {label:'Tl-200', value:'Tl-200'},
    {label:'Tl-201', value:'Tl-201'},
    {label:'Tl-202', value:'Tl-202'},
    {label:'Tl-204', value:'Tl-204'},
    {label:'Tm-161', value:'Tm-161'},
    {label:'Tm-162', value:'Tm-162'},
    {label:'Tm-163', value:'Tm-163'},
    {label:'Tm-165', value:'Tm-165'},
    {label:'Tm-166', value:'Tm-166'},
    {label:'Tm-167', value:'Tm-167'},
    {label:'Tm-168', value:'Tm-168'},
    {label:'Tm-170', value:'Tm-170'},
    {label:'Tm-171', value:'Tm-171'},
    {label:'Tm-172', value:'Tm-172'},
    {label:'Tm-173', value:'Tm-173'},
    {label:'Tm-175', value:'Tm-175'},
    {label:'U-230', value:'U-230'},
    {label:'U-231', value:'U-231'},
    {label:'U-232', value:'U-232'},
    {label:'U-233', value:'U-233'},
    {label:'U-234', value:'U-234'},
    {label:'U-235', value:'U-235'},
    {label:'U-235m', value:'U-235m'},
    {label:'U-236', value:'U-236'},
    {label:'U-237', value:'U-237'},
    {label:'U-238', value:'U-238'},
    {label:'U-239', value:'U-239'},
    {label:'U-240', value:'U-240'},
    {label:'U-242', value:'U-242'},
    {label:'V-47', value:'V-47'},
    {label:'V-48', value:'V-48'},
    {label:'V-49', value:'V-49'},
    {label:'V-50', value:'V-50'},
    {label:'W-177', value:'W-177'},
    {label:'W-178', value:'W-178'},
    {label:'W-179', value:'W-179'},
    {label:'W-181', value:'W-181'},
    {label:'W-185', value:'W-185'},
    {label:'W-187', value:'W-187'},
    {label:'W-188', value:'W-188'},
    {label:'W-190', value:'W-190'},
    {label:'Y-84m', value:'Y-84m'},
    {label:'Y-85', value:'Y-85'},
    {label:'Y-85m', value:'Y-85m'},
    {label:'Y-86', value:'Y-86'},
    {label:'Y-86m', value:'Y-86m'},
    {label:'Y-87', value:'Y-87'},
    {label:'Y-87m', value:'Y-87m'},
    {label:'Y-88', value:'Y-88'},
    {label:'Y-90', value:'Y-90'},
    {label:'Y-90m', value:'Y-90m'},
    {label:'Y-91', value:'Y-91'},
    {label:'Y-91m', value:'Y-91m'},
    {label:'Y-92', value:'Y-92'},
    {label:'Y-93', value:'Y-93'},
    {label:'Y-94', value:'Y-94'},
    {label:'Y-95', value:'Y-95'},
    {label:'Yb-162', value:'Yb-162'},
    {label:'Yb-163', value:'Yb-163'},
    {label:'Yb-164', value:'Yb-164'},
    {label:'Yb-166', value:'Yb-166'},
    {label:'Yb-167', value:'Yb-167'},
    {label:'Yb-169', value:'Yb-169'},
    {label:'Yb-175', value:'Yb-175'},
    {label:'Yb-177', value:'Yb-177'},
    {label:'Yb-178', value:'Yb-178'},
    {label:'Zn-62', value:'Zn-62'},
    {label:'Zn-63', value:'Zn-63'},
    {label:'Zn-65', value:'Zn-65'},
    {label:'Zn-69', value:'Zn-69'},
    {label:'Zn-69m', value:'Zn-69m'},
    {label:'Zn-71m', value:'Zn-71m'},
    {label:'Zn-72', value:'Zn-72'},
    {label:'Zr-86', value:'Zr-86'},
    {label:'Zr-87', value:'Zr-87'},
    {label:'Zr-88', value:'Zr-88'},
    {label:'Zr-89', value:'Zr-89'},
    {label:'Zr-93', value:'Zr-93'},
    {label:'Zr-95', value:'Zr-95'},
    {label:'Zr-97', value:'Zr-97'},
    ];    
const lungClass = {'H-3':{
                    'F':{
                            dose:[{label:'100',value:'0.00000000002629'},
                                {label:'365',value:'F-365'},
                                {label:'1825',value:'F-1825'},
                                {label:'3650',value:'F-3650'}
                            ]
                        },
                    'M':{
                        dose:[{label:'100',value:'0.00000000002629'},
                                {label:'365',value:'M-365'},
                                {label:'1825',value:'M-1825'},
                                {label:'3650',value:'M-3650'}
                            ]
                    }
                }};

export {nuclides, lungClass}